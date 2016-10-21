/**
 * Created by mac on 15/11/24.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import { loadingMiddleware as fetchMiddleware } from './fetch';
import {fetching} from './fetching';
//import LoadingBar from './LoadingBar';
import LoadingBar from './Bar.js';
import {isMock} from './mock.js';

// bar reducers middleware  Module
export default class BindReact extends Component {
    render() {
        let {reducers,middleware,autoDevTools} = this.props;


        if(typeof(middleware) =='undefined'){

            middleware = [];
        }


        // 并返回一个包含兼容 API 的函数。
        let middlewareList = [
            thunk,
            fetchMiddleware,
            ...middleware
        ];

        let createStoreWithMiddleware=null;
        let dev = '';
        if(autoDevTools && isMock() ){

            /*
             let createStoreWithMiddleware = compose(
             applyMiddleware(...middlewareList),
             //必须的！启用带有monitors（监视显示）的DevTools
             DevTools.instrument()
             )(createStore);*/
            dev = require('./DevTools');
            if(dev){
                createStoreWithMiddleware = compose(
                    //你要使用的中间件，放在前面
                    applyMiddleware(...middlewareList),
                    //必须的！启用带有monitors（监视显示）的DevTools
                    dev.instrument()
                );
            }

        }else{
            createStoreWithMiddleware = (
                //你要使用的中间件，放在前面
                applyMiddleware(...middlewareList)
            );
        }


        // 像使用 createStore() 一样使用它。
        let app = combineReducers({...reducers,fetching});
        let store = createStoreWithMiddleware(createStore)(app);

        window.dispatch=this.dispatch = store.dispatch;
        return (
            <Provider store={store}>
                {this.show(this.dispatch,dev )}
            </Provider>
        );
    }

    show(dispatch,Dev){
        const { Module,children} = this.props;
        return (
            <div>
                <Module dispatch={dispatch} />
                {Dev ? <Dev /> :''}
                <LoadingBar {...this.props}  />
                {children}
            </div>
        );
    }
}