import React, { Component } from 'react';
import { connect } from 'react-redux';
import extend from 'extend';

@connect(state => ({
    fetching: state.fetching
}))
export default class LoadingBar extends Component {
    constructor(props,context){
        super(props,context);
        this.init = false;
        this.moduleName='ref-loadingBar';
        this.style={

            loadingbar:{
                position: 'fixed',
                zIndex: 2147483647,
                opacity:1,
                top: 0,
                display:'block',
                left: '-6px',
                width: '1%',
                height: '2px',
                background: '#b91f1f',
                MozBorderRadius:'1px',
                WebkitBorderRadius:'1px',
                borderRadius:'1px',
                MozTransition:'all 500ms ease-in-out',
                msTransition:'all 500ms ease-in-out',
                WebkitTransition:'all 500ms ease-in-out',
                transition:'all 500ms ease-in-out'
            },
            waiting:{
                MozAnimation:'pulse 2s ease-out 0s infinite',
                msAnimation:'pulse 2s ease-out 0s infinite',
                oAnimation:'pulse 2s ease-out 0s infinite',
                WebkitAnimation:'pulse 2s ease-out 0s infinite',
                animation:'pulse 2s ease-out 0s infinite'
            },
            i:{
                opacity: 0.6,
                width:'180px',
                right:'-80px',
                display:'block',
                clip: 'rect(-6px,90px,14px,-6px)'
            },
            b:{
                opacity: 0.6,
                width:'20px',
                right:'0',
                clip: 'rect(-6px,22px,14px,10px)'
            },
            bi:{
                position:'absolute',
                top:'0',
                height:'2px',
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
            fetching:this.props.fetching,
            style:{}
        };
    }

    setProcess(){
        let {fetching} = this.props;

        if(this.init){

            if(fetching){
                this.setState({
                    style:{
                        width:(50 + Math.random() * 30)+ "%",
                        opacity:1
                    },
                    fetching:1
                });
                //elm.style.width=(50 + Math.random() * 30)+ "%";
            }
        }

    }

    hide(){
        if(this.init) {
            this.setState({
                style:{
                    width: '101%'
                },
                fetching: 0
            });

            setTimeout(function () {
                this.setState({
                    style: {
                        opacity: 0,
                        display:'none',
                        width: '1%'
                    }
                });
            }.bind(this), 800);
        }
    }

    componentDidMount(){
        this.init=true;
        this.setProcess();

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.fetching==0){
            this.hide();
        }else{
            this.setProcess();
        }
    }

    render(){
        let style = this.style;
        //if(this.props.fetching==0){
        //    this.hide();
        //}
        return (
            <div ref={this.moduleName} style={extend({},style.loadingbar,this.state.style)}>
                <i style={extend({},style.i,style.bi)}></i>
                <b style={extend({},style.b,style.bi)}></b>
            </div>
        );
    }
}