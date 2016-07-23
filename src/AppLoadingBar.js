import React, { Component } from 'react';
import { connect } from 'react-redux';
import extend from 'extend';

@connect(state => ({
    fetching: state.fetching
}))
export default class LoadingBar extends Component {
    constructor(props,context){
        super(props,context);
        this.moduleName='ref-appLoadingBar';
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
                backgroundColor: 'rgba(0,0,0,0.4)'
            },
            label:{
                display: 'inline-block',
                padding: '1em 2em',
                borderRadius: '5px',
                backgroundColor: 'rgba(0,0,0,0.8)',
                color: 'white'
            }
        };

    }



    render(){
        let style = this.style;

        let {fetching,children} = this.props;

        if(typeof(children) == 'undefined' || !children ){
            children = fetching === 1 ? '加载中...' : '提交中...';
        }

        return (
            fetching ?
                <div ref={this.moduleName} style={style.toast}>
                    <div style={style.label}>{children}</div>
                </div>
            :null
        );
    }
}