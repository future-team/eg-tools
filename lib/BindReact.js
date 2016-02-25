/**
 * Created by mac on 15/11/24.
 */
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _fetch = require('./fetch');

var _fetching = require('./fetching');

var _LoadingBar = require('./LoadingBar');

var _LoadingBar2 = _interopRequireDefault(_LoadingBar);

var BindReact = (function (_Component) {
    _inherits(BindReact, _Component);

    function BindReact() {
        _classCallCheck(this, BindReact);

        _Component.apply(this, arguments);
    }

    BindReact.prototype.render = function render() {
        var reducers = this.props.reducers;

        // 并返回一个包含兼容 API 的函数。
        var createStoreWithMiddleware = _redux.applyMiddleware(_reduxThunk2['default'], _fetch.middleware)(_redux.createStore);

        // 像使用 createStore() 一样使用它。
        var app = _redux.combineReducers(_extends({}, reducers, { fetching: _fetching.fetching }));
        var store = createStoreWithMiddleware(app);

        return _react2['default'].createElement(
            _reactRedux.Provider,
            { store: store },
            this.show()
        );
    };

    BindReact.prototype.show = function show() {
        var Module = this.props.Module;

        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(Module, null),
            _react2['default'].createElement(_LoadingBar2['default'], null)
        );
    };

    return BindReact;
})(_react.Component);

exports['default'] = BindReact;
module.exports = exports['default'];