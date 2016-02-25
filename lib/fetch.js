'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var notnull = function notnull() {};

var dispatch = undefined;

function showLoading() {
    dispatch({
        type: 'fetch_begin'
    });
}

function hideLoading() {
    dispatch({
        type: 'fetch_end'
    });
}

function fetch(url) {
    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var success = arguments.length <= 2 || arguments[2] === undefined ? notnull : arguments[2];
    var error = arguments.length <= 3 || arguments[3] === undefined ? notnull : arguments[3];
    var opts = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

    opts.success = function (data, xhr) {
        hideLoading();
        success(data, xhr);
    };
    opts.error = function (xhr) {
        hideLoading();
        error(xhr);
    };
    opts.data = params;

    showLoading();
    _request2['default'].fetch(url, opts);
}

fetch.middleware = function (store) {

    dispatch = store.dispatch;
    return function (next) {
        return function (action) {
            return next(action);
        };
    };
};

exports['default'] = fetch;
module.exports = exports['default'];