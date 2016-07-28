'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fetchJs = require('./fetch.js');

var _fetchJs2 = _interopRequireDefault(_fetchJs);

exports['default'] = function (url) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? { body: {}, method: 'GET' } : arguments[1];

    //判断参数个数  一共支持3个参数 分别是url、params、options
    //url,params={},success,error='notnull',opts={}

    return new Promise(function (resolve, reject) {
        _fetchJs2['default'](url, options.body, function (data, xhr) {
            resolve(data, xhr);
        }, function (xhr) {
            reject(xhr);
        }, options);
    });
};

module.exports = exports['default'];