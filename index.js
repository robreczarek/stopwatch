
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

    this.updateLabel = function(timer, element) {
        return window.setInterval(function() {
            element.innerHTML = timer.getTime();
        }, 1);
    };

}

window.addEventListener("load", function() {

    var timer = new Timer();
    var timerUI = new UI();

    var $btn_resume = document.getElementById("ui-resume");
    var $btn_stop = document.getElementById("ui-stop");
    var $lbl_time = document.getElementById("ui-time");

    var interval = window.setInterval(function() { $lbl_time.innerHTML = timer.getTime(); }, 1);

    $btn_stop.addEventListener("click", function() {
        window.clearInterval(interval);
    });

    $btn_resume.addEventListener("click", function() {
        interval = window.setInterval(function() { $lbl_time.innerHTML = timer.getTime(); }, 1);

    });

});
