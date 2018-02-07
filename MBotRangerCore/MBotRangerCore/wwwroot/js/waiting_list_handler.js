var guest_WaitTime = document.getElementById("guestWaitTime").innerHTML;
var initialWaitSeconds = guest_WaitTime;
if (guest_WaitTime !== null) {
    setInterval(function () {
        document.getElementById("guestWaitTime").innerHTML = initialWaitSeconds;

        initialWaitSeconds--;
        if (initialWaitSeconds  < 1) {
            document.getElementById("guestWaitTime").innerHTML = "Refreshing";
            window.location = '/Robot/Index';
        }
    }, 1000);
}






