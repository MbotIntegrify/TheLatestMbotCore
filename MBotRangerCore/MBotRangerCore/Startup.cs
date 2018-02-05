﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Session;
using Microsoft.EntityFrameworkCore;
using MBotRangerCore.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.Cookies;
using MBotRangerCore.Services;

namespace MBotRangerCore
{
    public class Startup
    {
        MbotAppData fdsfd = new MbotAppData();
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
          
           
            services.AddDbContext<MBotRangerCoreContext>(options => options.UseSqlServer(@"Data Source=tcp:integrifydbserver.database.windows.net,1433;Initial Catalog=MBotRangerCore20180205115100_db;Persist Security Info=False;User ID=bratland;Password=SaltedCaramel1!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"));
            services.AddIdentity<ApplicationUser, IdentityRole>(config =>
            {
                config.SignIn.RequireConfirmedEmail = false;
            })
               .AddEntityFrameworkStores<MBotRangerCoreContext>()
               .AddDefaultTokenProviders();
            services.Configure<IdentityOptions>(options =>
            {
                // Password settings
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 6;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = false;
                options.Password.RequiredUniqueChars = 1;              

            });

            services.BuildServiceProvider().GetService<MBotRangerCoreContext>().Database.Migrate();

            services.Configure<SecurityStampValidatorOptions>(options =>
            options.ValidationInterval = TimeSpan.FromSeconds(1)
            );
            services.AddAuthentication().Services.ConfigureApplicationCookie(
                options=>
                {
                    options.SlidingExpiration = true;
                    options.ExpireTimeSpan = TimeSpan.FromSeconds(600);
                });


            services.AddMvc();
            services.AddDistributedMemoryCache();
          //  services.AddSession();
            services.AddSession(options => {
                options.IdleTimeout = TimeSpan.FromSeconds(600);
            });

            // Add application services.
            services.AddTransient<IEmailSender, EmailSender>();



            services.AddSingleton<MbotAppData>();

            services.Configure<AuthMessageSenderOptions>(Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

            app.UseSession();
            if (env.IsDevelopment())
            {
                // In Development, use the developer exception page
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();   
            }
            else
            {
                // In Staging/Production, route exceptions to /error
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();           
            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Start}/{id?}");
            });
        }
    }
}
