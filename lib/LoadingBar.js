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
        this.init = false;
        this.moduleName = 'ref-loadingBar';
        this.style = {

            loadingbar: {
                position: 'fixed',
                zIndex: 2147483647,
                opacity: 1,
                top: 0,
                display: 'block',
                left: '-6px',
                width: '1%',
                height: '2px',
                background: '#b91f1f',
                MozBorderRadius: '1px',
                WebkitBorderRadius: '1px',
                borderRadius: '1px',
                MozTransition: 'all 500ms ease-in-out',
                msTransition: 'all 500ms ease-in-out',
                WebkitTransition: 'all 500ms ease-in-out',
                transition: 'all 500ms ease-in-out'
            },
            waiting: {
                MozAnimation: 'pulse 2s ease-out 0s infinite',
                msAnimation: 'pulse 2s ease-out 0s infinite',
                oAnimation: 'pulse 2s ease-out 0s infinite',
                WebkitAnimation: 'pulse 2s ease-out 0s infinite',
                animation: 'pulse 2s ease-out 0s infinite'
            },
            i: {
                opacity: 0.6,
                width: '180px',
                right: '-80px',
                display: 'block',
                clip: 'rect(-6px,90px,14px,-6px)'
            },
            b: {
                opacity: 0.6,
                width: '20px',
                right: '0',
                clip: 'rect(-6px,22px,14px,10px)'
            },
            bi: {
                position: 'absolute',
                top: '0',
                height: '2px',
                MozBoxShadow: '#b91f1f 1px 0 6px 1px',
                msBoxShadow: '#b91f1f 1px 0 6px 1px',
                WebkitBoxShadow: '#B91F1F 1px 0 6px 1px',
                boxShadow: '#B91F1F 1px 0 6px 1px',
                MozBorderRadius: '100%',
                WebkitBorderRadius: '100%',
                borderRadius: '100%'
            }

        };

        this.state = {
            fetching: this.props.fetching,
            style: {}
        };
    }

    LoadingBar.prototype.setProcess = function setProcess() {
        var fetching = this.props.fetching;

        if (this.init) {

            if (fetching) {
                this.setState({
                    style: {
                        width: 50 + Math.random() * 30 + "%",
                        opacity: 1
                    },
                    fetching: 1
                });
                //elm.style.width=(50 + Math.random() * 30)+ "%";
            }
        }
    };

    LoadingBar.prototype.hide = function hide() {
        if (this.init) {
            this.setState({
                style: {
                    width: '101%'
                },
                fetching: 0
            });

            setTimeout((function () {
                this.setState({
                    style: {
                        opacity: 0,
                        display: 'none',
                        width: '1%'
                    }
                });
            }).bind(this), 800);
        }
    };

    LoadingBar.prototype.componentDidMount = function componentDidMount() {
        this.init = true;
        this.setProcess();
    };

    LoadingBar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.fetching == 0) {
            this.hide();
        } else {
            this.setProcess();
        }
    };

    LoadingBar.prototype.render = function render() {
        var style = this.style;
        //if(this.props.fetching==0){
        //    this.hide();
        //}
        return _react2['default'].createElement(
            'div',
            { ref: this.moduleName, style: _extend2['default']({}, style.loadingbar, this.state.style) },
            _react2['default'].createElement('i', { style: _extend2['default']({}, style.i, style.bi) }),
            _react2['default'].createElement('b', { style: _extend2['default']({}, style.b, style.bi) })
        );
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