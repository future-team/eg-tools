'use strict';
exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _BindReact2 = require('./BindReact');

var _BindReact3 = _interopRequireDefault(_BindReact2);

exports.BindReact = _BindReact3['default'];

var _createReducer2 = require('./createReducer');

var _createReducer3 = _interopRequireDefault(_createReducer2);

exports.createReducer = _createReducer3['default'];

var _fetch2 = require('./fetch');

var _fetch3 = _interopRequireDefault(_fetch2);

exports.fetch = _fetch3['default'];

var _fetching = require('./fetching');

exports.fetching = _fetching.fetching;

var _bindingMixin2 = require('./bindingMixin');

var _bindingMixin3 = _interopRequireDefault(_bindingMixin2);

exports.bindingMixin = _bindingMixin3['default'];

window['EgTools'] = {};

['BindReact', 'createReducer', 'fetch', 'fetching', 'bindingMixin'].forEach(function (clazzName) {
    EgTools[clazzName] = exports[clazzName];
});