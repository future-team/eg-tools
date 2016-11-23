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

//import LoadingBar from './LoadingBar';

var _BarJs = require('./Bar.js');

var _BarJs2 = _interopRequireDefault(_BarJs);

var _mockJs = require('./mock.js');

// bar reducers middleware  Module

var BindReact = (function (_Component) {
    _inherits(BindReact, _Component);

    function BindReact() {
        _classCallCheck(this, BindReact);

        _Component.apply(this, arguments);
    }

    BindReact.prototype.render = function render() {
        var _props = this.props;
        var reducers = _props.reducers;
        var middleware = _props.middleware;
        var autoDevTools = _props.autoDevTools;

        if (typeof middleware == 'undefined') {

            middleware = [];
        }

        // 并返回一个包含兼容 API 的函数。
        var middlewareList = [_reduxThunk2['default'], _fetch.loadingMiddleware].concat(middleware);

        var createStoreWithMiddleware = null;
        var dev = '';
        if (autoDevTools && _mockJs.isMock()) {

            /*
             let createStoreWithMiddleware = compose(
             applyMiddleware(...middlewareList),
             //必须的！启用带有monitors（监视显示）的DevTools
             DevTools.instrument()
             )(createStore);*/
            dev = require('./DevTools');
            if (dev) {
                createStoreWithMiddleware = _redux.compose(
                //你要使用的中间件，放在前面
                _redux.applyMiddleware.apply(undefined, middlewareList),
                //必须的！启用带有monitors（监视显示）的DevTools
                dev.instrument());
            }
        } else {
            createStoreWithMiddleware =
            //你要使用的中间件，放在前面
            _redux.applyMiddleware.apply(undefined, middlewareList);
        }

        // 像使用 createStore() 一样使用它。
        var app = _redux.combineReducers(_extends({}, reducers, { fetching: _fetching.fetching }));
        var store = createStoreWithMiddleware(_redux.createStore)(app);

        window.dispatch = this.dispatch = store.dispatch;
        return _react2['default'].createElement(
            _reactRedux.Provider,
            { store: store },
            this.show(this.dispatch, dev)
        );
    };

    BindReact.prototype.show = function show(dispatch, Dev) {
        var _props2 = this.props;
        var Module = _props2.Module;
        var children = _props2.children;

        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(Module, { dispatch: dispatch }),
            Dev ? _react2['default'].createElement(Dev, null) : '',
            _react2['default'].createElement(_BarJs2['default'], this.props),
            children
        );
    };

    return BindReact;
})(_react.Component);

exports['default'] = BindReact;
module.exports = exports['default'];