/*
 * JS Logger
 * Lightweight JavaScript Logger for the browser and node.
 * It is a perfect logger that supports all browsers.
 * It allows to print color logs with pre-defined 5 levels of logging
 * It has a debug mode in which you can print logs during dev and then set it to false to avoid printing confidential logs during production
 * Website: https://github.com/suhaibjanjua/js-logger
 * Copyright: (c) 2019 Suhaib Janjua
 * License: MIT
 */
try {
    var objLogs = '';
    var useIE11 = false;

    var utc = function utc(now) {
        var datestring = now.toDateString() + " " + ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2);
        return datestring;
    };

    var jslogger = new function() {

        var VERBOSE = false;
        var appName = 'JSLOGGER';

        var _log = function _log(process, message, level) {
            var colorLevel = {
                "info": "black",
                "debug": "blue",
                "success": "green",
                "warning": "orange",
                "error": "red"
            };
            if (useIE11) {
                var printLog = utc(new Date()) + " | " + appName + " | " + "[" + process + "] :: " + message;
                objLogs += printLog + "\n";
                console.log(printLog);
            } else {
                var printLog = utc(new Date()) + " | " + appName + " | " + "[" + process + "] :: " + message;
                objLogs += printLog + "\n";
                console.log("%c " + printLog, "color:" + colorLevel[level]);
            }
        };

        this.info = function info(process, message) {
            _log(process, message, "info");
        };

        this.error = function error(process, message) {
            _log(process, message, "error");
        };

        this.success = function success(process, message) {
            _log(process, message, "success");
        };

        this.warning = function warning(process, message) {
            _log(process, message, "warning");
        };

        this.debug = function debug(process, message) {
            if (VERBOSE) {
                _log(process, message, "debug");
            }
        };

        this.downloadLogs = function downloadLogs() {
            var a = document.createElement('a');
            var file = new Blob([objLogs], { type: 'text/plain' });
            a.href = URL.createObjectURL(file);
            a.download = appName + "-" + utc(new Date()) + ".log";
            a.click();
        };

        this.setLevelToVerbose = function setLevelToVerbose(isVerbose) {
            VERBOSE = isVerbose;
        };

        this.setAppName = function setAppName(name) {
            appName = name;
        };

        this.version = function version() {
            return "1.2.0"
        };

        this.about = function about() {
            return "Website: https://github.com/suhaibjanjua/js-logger \n Copyright: (c) 2019 Suhaib Janjua"
        };

    };

    if (navigator.appName === "Microsoft Internet Explorer" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/))) {
        //window.Promise = window.ES6Promise;
        useIE11 = true;
        jslogger.warning("Initialize ", "Internet Explorer 11 detected. You need to load ES6-shim in order to work (IE11-compat)");
    }
} catch (err) {
    console.log("If you see this... Just go away from the code :-)", err);
}
