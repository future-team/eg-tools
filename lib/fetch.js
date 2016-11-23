'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var dispatch = undefined;

var fetching = 0;

function showLoading(method) {
    if (fetching === 0) {
        dispatch({
            type: method.toLowerCase() === 'get' ? 'fetch_begin' : 'fetch_submit_begin'
        });
    }
    fetching += 1;
}

function hideLoading() {
    fetching -= 1;
    if (fetching <= 0) {
        fetching = 0;
    }
    if (fetching === 0) {
        dispatch({
            type: 'fetch_end'
        });
    }
}

function fetch(url, params, success) {
    if (params === undefined) params = {};
    var error = arguments.length <= 3 || arguments[3] === undefined ? 'notnull' : arguments[3];
    var opts = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

    var isLoadingBar = typeof opts.isLoadingBar == 'boolean' ? opts.isLoadingBar : true;
    opts.success = function (data, xhr) {
        hideLoading();
        success && success(data, xhr);
        fetch.successEvent(xhr);
    };
    opts.error = function (xhr) {
        if (error == 'notnull') {
            fetch.errorEvent(xhr);
        } else {
            error && error(xhr);
        }
        hideLoading();
    };
    opts.data = params;

    isLoadingBar && showLoading(opts.method ? opts.method : 'get');

    return _request2['default'].fetch(url, opts);
}
fetch.errorEvent = function () {};
fetch.successEvent = function () {};

fetch.loadingMiddleware = function (store) {

    dispatch = store.dispatch;
    return function (next) {
        return function (action) {
            return next(action);
        };
    };
};

exports['default'] = fetch;
module.exports = exports['default'];