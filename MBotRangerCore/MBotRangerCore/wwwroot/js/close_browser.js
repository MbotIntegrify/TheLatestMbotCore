//var emailToLogOut = document.getElementById("loggedUser").value;

/*
var arrrrrr = [];
var array = @Html.Raw(@ViewBag.WaitList);
for (var i = 0; i < array.length; i++) {
    arrrrrr[i] = array[i];
}
*/

//var theList = document.getElementById("arrayWaitingList").textContent; 
//var cars = ["Saab", "Volvo", "BMW"];
//document.getElementById("arrayDisplay").innerHTML = cars;

// Logged in users from the server side. ViewBag/ViewData
var loggedUsersArray = []; 
loggedUsersArray.push("a@a.a");
loggedUsersArray.push("b@b.b");


// Active users from the client side. from _LoginPartial
var activeUsers = [];
activeUsers.push("a@a.a");
activeUsers.push("b@b.b");




setInterval(function () {
    var counter = 0;
    for (var i = 0; i < loggedUsersArray.length; i++) {
        for (var j = 0; j < activeUsers.length; j++ ) {
            if (loggedUsersArray[i] == activeUsers [j]) {
                counter++;                
            }
        }
        if (counter == 0)
        {
          //  alert("in the if");
            window.location = '/Account/Logout?loggedOutEmail=' + loggedUsersArray[i];
    
            var index = loggedUsersArray.indexOf(loggedUsersArray[i]);
            if (index > -1) {
                loggedUsersArray.splice(index, 1);
            }
            
        }
        counter = 0;
      //  alert("outside");
        
    }

}, 25000);
