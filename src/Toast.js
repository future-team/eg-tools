import React, { Component } from 'react';
import { connect } from 'react-redux';
import extend from 'extend';

export default class Toast extends Component {
    constructor(props,context){
        super(props,context);
        this.moduleName='ref-toast';
        this.style={
            toast:{
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
            label:{
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
    componentWillReceiveProps(nextProps) {
        /*this.setState({
            show: nextProps.show
        });*/
    }

    render(){
        let style = this.style;

        //let {children,timeout,closeCallback} = this.props;

       /* clearTimeout(this._timeout);
        this._timeout = setTimeout(()=>{
            this.setState({
                show:false
            });
            closeCallback&&closeCallback();
        },timeout||2000);*/

        return (
            <div ref={this.moduleName} style={extend(style.toast,this.props.style||{

            })} {...this.props}>
                <div style={style.label}>{this.props.children}</div>
            </div>
        );
    }
}