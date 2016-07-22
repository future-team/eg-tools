'use strict';

exports.__esModule = true;
exports.isMock = isMock;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function isMock() {
    var location = window.location,
        localhost = /127.0.0.1|localhost/.test(location.hostname) && location.href.indexOf('8080') < 0,
        mockParam = !!_querystring2['default'].parse(location.search && location.search.substring(1)).mock;
    return localhost || mockParam;
}

;