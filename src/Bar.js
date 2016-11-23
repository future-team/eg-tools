import React, { Component } from 'react';
import LoadingBar from './LoadingBar';
import AppLoadingBar from './AppLoadingBar';

export default class Bar extends Component {

    constructor(props,context){
        super(props,context);

        this.barList = {
            app:AppLoadingBar,
            web:LoadingBar
        };
    }

    render(){

        const {barName,autoShowFetching,children} = this.props;

        const Bar = this.barList[barName?barName:'web'];

        return (
            autoShowFetching?<Bar /> :null
        );
    }
}