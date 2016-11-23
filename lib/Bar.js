'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoadingBar = require('./LoadingBar');

var _LoadingBar2 = _interopRequireDefault(_LoadingBar);

var _AppLoadingBar = require('./AppLoadingBar');

var _AppLoadingBar2 = _interopRequireDefault(_AppLoadingBar);

var Bar = (function (_Component) {
    _inherits(Bar, _Component);

    function Bar(props, context) {
        _classCallCheck(this, Bar);

        _Component.call(this, props, context);

        this.barList = {
            app: _AppLoadingBar2['default'],
            web: _LoadingBar2['default']
        };
    }

    Bar.prototype.render = function render() {
        var _props = this.props;
        var barName = _props.barName;
        var autoShowFetching = _props.autoShowFetching;
        var children = _props.children;

        var Bar = this.barList[barName ? barName : 'web'];

        return autoShowFetching ? _react2['default'].createElement(Bar, null) : null;
    };

    return Bar;
})(_react.Component);

exports['default'] = Bar;
module.exports = exports['default'];