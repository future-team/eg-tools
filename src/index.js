'use strict';
export BindReact  from './BindReact';
export createReducer from './createReducer';
export fetch from './fetch';
export {fetching} from './fetching';
export bindingMixin from './bindingMixin';

window['EgTools'] = {};

[
    'BindReact','createReducer','fetch','fetching','bindingMixin'
].forEach(function(clazzName){
        EgTools[clazzName] =exports[clazzName];
    });