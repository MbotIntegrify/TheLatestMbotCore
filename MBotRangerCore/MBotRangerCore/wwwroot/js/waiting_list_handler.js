var guest_WaitTime = document.getElementById("guestWaitTime").innerHTML;
var initialWaitSeconds = guest_WaitTime;
var checkedValue = $('.messageCheckbox:checked').val();
$(document).ready(function () {
    //   Hide the border by commenting out the variable below
    var $on = 'section';
    $($on).css({
        'background': 'none',
        'border': 'none',
        'box-shadow': 'none'
    });
}); 
var speechMsgInput = guest_WaitTime;
// Create a new instance of SpeechSynthesisUtterance.
var msg = new SpeechSynthesisUtterance();

msg.default = false;
$("#soundCheck").change(function () {
    if ($(this).is(':checked')) {
        $("#soundText").text('Turn the sound off');
    } else {
        $("#soundText").text('Turn the sound on');
    }
});

if (guest_WaitTime !== null) {
     setInterval(function () {

        var timeInHours = Math.floor(initialWaitSeconds / 3600);
        var timeInMinutes = Math.floor((initialWaitSeconds % 3600) / 60);
        var timeInSeconds = Math.floor(initialWaitSeconds % 60);
    
        if (timeInHours < 10) timeInHours = "0" + timeInHours;
        if (timeInMinutes < 10) timeInMinutes = "0" + timeInMinutes;
        if (timeInSeconds < 10) timeInSeconds = "0" + timeInSeconds;
        var timeAll = timeInHours + " : " + timeInMinutes + " : " + timeInSeconds;

        document.getElementById("guestWaitTime").innerHTML = timeAll;
        var supportMsg = document.getElementById('msg');
        msg.voice = window.speechSynthesis.getVoices().filter(function (voice) { return voice.name == 'Google US English'; })[0];

        if ('speechSynthesis' in window) {
            supportMsg.innerHTML = 'Your browser <strong>supports</strong> speech synthesis.';
        } else {
            supportMsg.innerHTML = 'Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="https://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.';
            supportMsg.classList.add('not-supported');
        }
        if (document.getElementById("soundCheck").checked == true) {
            if (timeInSeconds == 30 || timeInSeconds == 00) {
                
                if (timeInSeconds == 00) {
                    msg.text = "you have " + timeInMinutes + "minutes left to access the control";
                }
                else {
                    msg.text = "you have " + timeInMinutes + "minutes and" + timeInSeconds + "seconds left to access the control";
                }
                // Queue this utterance.
                window.speechSynthesis.speak(msg);
            }
        }
        initialWaitSeconds--;
        if (initialWaitSeconds  < 1) {
            document.getElementById("guestWaitTime").innerHTML = "Refreshing";
            window.location = '/Robot/Index';
        }
    }, 1000);
}
