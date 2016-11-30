'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _mockJs = require('./mock.js');

var _jqueryParam = require('jquery-param');

var _jqueryParam2 = _interopRequireDefault(_jqueryParam);

var Req = (function () {
    function Request() {
        _classCallCheck(this, Request);

        this.method = 'GET';
        this._xhrs = {};
        var pathname = location.pathname.substr(0, location.pathname.lastIndexOf('/') + 1);
        this.mockAddress = '' + location.origin + pathname + 'mocks/';
    }

    Request.prototype.getXMLHttpRequest = function getXMLHttpRequest() {
        var xhr = null;
        try {
            xhr = new ActiveXObject("microsoft.xmlhttp");
        } catch (e1) {
            try {
                //非IE浏览器
                xhr = new XMLHttpRequest();
            } catch (e2) {
                window.alert("您的浏览器不支持ajax，请更换！");
            }
        }
        return xhr;
    };

    Request.prototype.noc = function noc() {};

    Request.prototype.send = function send(url) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        opts.success = opts.success || this.noc;
        opts.error = opts.error || this.noc;

        if (typeof opts.dataType == 'undefined') {
            opts.dataType = 'json';
        }

        if (typeof opts.asyn == 'undefined') {
            opts.asyn = true;
        }

        var x = this.getXMLHttpRequest(),
            _this = this,
            uid = 'uid_' + new Date().getTime() + (Math.random() * 1e10).toFixed(0);

        x.open(opts.method || this.method, url, opts.asyn);
        this._xhrs[uid] = x;

        if (opts.timeout) {
            setTimeout(function () {
                x.abort();
                _this.removeXhr(uid);
            }, opts.timeout);
        }

        if (opts.credentials === 'include') {
            x.withCredentials = true;
        }

        x.onreadystatechange = function () {

            switch (x.readyState) {
                case 0:
                    opts.abort.call(x);
                    break;
                case 4:
                    _this.removeXhr(uid);
                    if (x.status >= 200 && x.status < 300 || x.status == 304) {
                        var ret = undefined;
                        if (/xml/i.test(x.getResponseHeader('content-type'))) {
                            ret = x.responseXML;
                        } else if (opts.dataType && opts.dataType.toLowerCase() == 'json') {
                            ret = JSON.parse(x.responseText); //eval("("+x.responseText+")");
                        } else {
                                ret = x.responseText;
                            }
                        opts.success.call(x, ret, x);
                    } else {
                        opts.error.call(x, x);
                    }
                    break;
            }
        };
        opts.header = opts.header ? opts.header : {};
        if (opts.method && opts.method.toUpperCase() === 'POST' && !opts.header['Content-Type']) {
            //x.setRequestHeader('Content-Type', 'application/json');
            //x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            opts.header['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        if (!opts.cache && opts.header && !('If-Modified-Since' in opts.header)) {
            //x.setRequestHeader("If-Modified-Since","Thu, 01 Jan 1970 00:00:00 GMT");
            opts.header['If-Modified-Since'] = "Thu, 01 Jan 1970 00:00:00 GMT";
        }
        x.setRequestHeader('Accept', '*/*');

        for (var t in opts.header) {
            x.setRequestHeader(t, opts.header[t]);
        }
        x.send(opts.data || null);

        return this;
    };

    Request.prototype.removeXhr = function removeXhr(uid) {
        if (uid in this._xhrs) {
            delete this._xhrs[uid];
        }
    };

    Request.prototype.abort = function abort() {
        var uid = undefined,
            xhr = undefined;
        for (uid in this._xhrs) {
            xhr = this._xhrs[uid].abort();
            this.removeXhr(uid);
        }

        return this;
    };

    Request.prototype.ajax = function ajax(url, opts) {

        if (opts.method && opts.method.toLowerCase() == 'post') {
            this.post(url, opts);
        } else if (opts.method && opts.method.toLowerCase() == 'get') {
            this.get(url, opts);
        } else {
            this.send(url, opts);
        }
    };

    Request.prototype.get = function get(url, opts) {
        opts = opts || {};
        opts.method = 'GET';

        var query = _jqueryParam2['default'](opts.data);
        var sym = url.indexOf('?') != -1 ? '&' : '?';
        var fullUrl = url + (query.length ? sym + query : '');
        opts.data = null;
        this.send(fullUrl, opts);
        return this;
    };

    Request.prototype.post = function post(url, opts) {
        opts = opts || {};
        opts.method = 'POST';

        opts.data = typeof opts.data != 'string' ? _jqueryParam2['default'](opts.data) : opts.data;
        this.send(url, opts);
    };

    Request.prototype.isMock = function isMock() {
        /*let location = window.location,
            localhost =/127.0.0.1|localhost/.test(location.hostname) && location.href.indexOf('8080')<0,
            mockParam =!!(querystring.parse(location.search && location.search.substring(1)).mock);
        return localhost || mockParam;*/
        return _mockJs.isMock();
    };

    Request.prototype.fetch = function fetch(url, opts) {
        var param = {};
        if (this.isMock()) {
            url = this.mockAddress + url.split('?')[0].toLowerCase() + '.json';
            opts.method = 'GET';
        }
        //url+='uuid='+(+new Date());

        this.ajax(url, opts);
        return this;
    };

    return Request;
})();

exports['default'] = new Req();
module.exports = exports['default'];