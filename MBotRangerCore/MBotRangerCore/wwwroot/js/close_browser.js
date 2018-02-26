//var emailToLogOut = document.getElementById("loggedUser").value;




var arrayLoggedUsersPages = []; 
//arrayLoggedUsersPages.push("a@a.a");
arrayLoggedUsersPages.push("b@b.b");

var arrayUsers = [];
arrayUsers.push("a@a.a");
arrayUsers.push("b@b.b");




setInterval(function () {
    var counter = 0;
    for (var pages in arrayLoggedUsersPages) {
        for (var userMails in arrayUsers) {
            if (userMails === pages) {
                counter++;                
            }
        }
        if (counter === 0)
        {
            window.location = '/Account/Logout?loggedOutEmail=' + pages;
            arrayUsers.indexOf(fruits.indexOf(pages));
            arrayLoggedUsersPages.indexOf(fruits.indexOf(pages));
            alert("in the if");
        }
        window.location = '/Account/Logout?loggedOutEmail=' + "a@a.a";
        alert("out the if");
        counter == 0;
    }

    alert("not fine");
}, 5000);
