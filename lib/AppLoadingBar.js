'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var LoadingBar = (function (_Component) {
    _inherits(LoadingBar, _Component);

    function LoadingBar(props, context) {
        _classCallCheck(this, _LoadingBar);

        _Component.call(this, props, context);
        this.moduleName = 'ref-appLoadingBar';
        this.style = {
            toast: {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1000,
                display: '-webkit-flex',
                WebkitAlignItems: 'center',
                WebkitJustifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.4)'
            },
            label: {
                display: 'inline-block',
                padding: '1em 2em',
                borderRadius: '5px',
                backgroundColor: 'rgba(0,0,0,0.8)',
                color: 'white'
            }
        };
    }

    LoadingBar.prototype.render = function render() {
        var style = this.style;

        var _props = this.props;
        var fetching = _props.fetching;
        var children = _props.children;

        if (typeof children == 'undefined' || !children) {
            children = fetching === 1 ? '加载中...' : '提交中...';
        }

        return fetching ? _react2['default'].createElement(
            'div',
            { ref: this.moduleName, style: style.toast },
            _react2['default'].createElement(
                'div',
                { style: style.label },
                children
            )
        ) : null;
    };

    var _LoadingBar = LoadingBar;
    LoadingBar = _reactRedux.connect(function (state) {
        return {
            fetching: state.fetching
        };
    })(LoadingBar) || LoadingBar;
    return LoadingBar;
})(_react.Component);

exports['default'] = LoadingBar;
module.exports = exports['default'];