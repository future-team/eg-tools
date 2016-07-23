'use strict';
export BindReact  from './BindReact';
export createReducer from './createReducer';
export fetch from './fetch';
export promisefetch from './promise-fetch';
export {fetching} from './fetching';
export bindingMixin from './bindingMixin';
export LoadingBar from './Bar.js';

window['EgTools'] = {};

[
    'BindReact','createReducer','fetch','fetching','bindingMixin','promisefetch','LoadingBar'
].forEach(function(clazzName){
        EgTools[clazzName] =exports[clazzName];
    });