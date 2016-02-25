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

window['Eagle'] = {};

['BindReact', 'createReducer', 'fetch', 'fetching'].forEach(function (clazzName) {
    Eagle[clazzName] = exports[clazzName];
});