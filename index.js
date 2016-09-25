(function () {
    'use strict';

    function Timer() {
    }

    Timer.prototype.getTime = function () {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var milliseconds = date.getMilliseconds();

        // TODO(piecioshka): when hour is less then 0 try add '0' before number (the same in minutes and seconds).

        return hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
    };

    // -----------------------------------------------------------------------

    function UI() {
    }

    UI.prototype.updateLabel = function (timer, $element) {
        return window.setInterval(function () {
            $element.innerHTML = timer.getTime();
        }, 1);
    };

    UI.prototype.setup = function (timer) {
        var self = this;

        var $btnResume = document.querySelector('#ui-resume');
        var $btnStop = document.querySelector('#ui-stop');
        var $timeLabel = document.querySelector('#ui-time');

        var interval = this.updateLabel(timer, $timeLabel);

        $btnStop.addEventListener('click', function () {
            window.clearInterval(interval);
        });

        $btnResume.addEventListener('click', function () {
            interval = self.updateLabel(timer, $timeLabel);
        });
    };

    // -----------------------------------------------------------------------

    function bootstrap() {
        var timer = new Timer();
        var ui = new UI();
        ui.setup(timer);
    }

    window.addEventListener('load', bootstrap);
}());
