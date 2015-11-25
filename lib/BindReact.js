/**
 * Created by mac on 15/11/24.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { middleware as fetchMiddleware } from './fetch';
import fetching from './fetching';

export default class BindReact extends Component {
    render() {
        const {reducers} = this.props;


        // 并返回一个包含兼容 API 的函数。
        let createStoreWithMiddleware = applyMiddleware(
            thunk,
            fetchMiddleware
        )(createStore);

        // 像使用 createStore() 一样使用它。
        let app = combineReducers(reducers,fetching);
        let store = createStoreWithMiddleware(app);

        return (
            <Provider store={store}>
                {this.show()}
            </Provider>
        );
    }

    show(){
        const { Module} = this.props;
        return (
            <div>
                <Module />
            </div>
        );
    }
}