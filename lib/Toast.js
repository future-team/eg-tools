'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var Toast = (function (_Component) {
    _inherits(Toast, _Component);

    function Toast(props, context) {
        _classCallCheck(this, Toast);

        _Component.call(this, props, context);
        this.moduleName = 'ref-toast';
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
                backgroundColor: 'rgba(0,0,0,0.4)',
                WebkitTransition: 'all ease-in-out .4s',
                MozTransition: 'all ease-in-out .4s',
                transition: 'all ease-in-out .4s',
                opacity: 1,
                visibility: 'visible'
            },
            label: {
                display: 'inline-block',
                padding: '1em 2em',
                borderRadius: '5px',
                backgroundColor: 'rgba(0,0,0,0.8)',
                color: 'white'
            }
        };

        /*this.state = {
            show:this.props.show||false
        };*/
    }

    Toast.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        /*this.setState({
            show: nextProps.show
        });*/
    };

    Toast.prototype.render = function render() {
        var style = this.style;

        //let {children,timeout,closeCallback} = this.props;

        /* clearTimeout(this._timeout);
         this._timeout = setTimeout(()=>{
             this.setState({
                 show:false
             });
             closeCallback&&closeCallback();
         },timeout||2000);*/

        return _react2['default'].createElement(
            'div',
            _extends({ ref: this.moduleName, style: _extend2['default'](style.toast, this.props.style || {}) }, this.props),
            _react2['default'].createElement(
                'div',
                { style: style.label },
                this.props.children
            )
        );
    };

    return Toast;
})(_react.Component);

exports['default'] = Toast;
module.exports = exports['default'];