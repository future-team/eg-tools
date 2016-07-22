'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

//从redux-devtools中引入createDevTools

var _reduxDevtools = require('redux-devtools');

//显示包是单独的，要额外指定

var _reduxDevtoolsLogMonitor = require('redux-devtools-log-monitor');

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = require('redux-devtools-dock-monitor');

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

//创建DevTools组件
var DevTools = _reduxDevtools.createDevTools(_react2['default'].createElement(
    _reduxDevtoolsDockMonitor2['default'],
    { toggleVisibilityKey: 'ctrl-h',
        changePositionKey: 'ctrl-q' },
    _react2['default'].createElement(_reduxDevtoolsLogMonitor2['default'], { theme: 'tomorrow' })
));

exports['default'] = DevTools;
module.exports = exports['default'];