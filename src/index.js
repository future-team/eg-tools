'use strict';
export BindReact  from './BindReact';
export createReducer from './createReducer';
export fetch from './fetch';
export {fetching} from './fetching';

window['EgTools'] = {};

[
    'BindReact','createReducer','fetch','fetching'
].forEach(function(clazzName){
        EgTools[clazzName] =exports[clazzName];
    });