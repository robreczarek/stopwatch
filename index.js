
function Timer() {

    this.getTime = function() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var milliseconds = date.getMilliseconds();
        var time = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
        return time;
    };

}

function UI() {

}

UI.prototype.updateLabel = function(timer, element) {
    return window.setInterval(function() {
        element.innerHTML = timer.getTime();
    }, 1);
};

window.addEventListener("load", function() {

    var timer = new Timer();
    var timerUI = new UI();

    var $btnResume = document.getElementById("ui-resume");
    var $btnStop = document.getElementById("ui-stop");
    var $lblTime = document.getElementById("ui-time");

    var interval = timerUI.updateLabel( timer, $lblTime );

    $btnStop.addEventListener("click", function() {
        window.clearInterval(interval);
    });

    $btnResume.addEventListener("click", function() {
        interval = timerUI.updateLabel( timer, $lblTime );
    });

});
