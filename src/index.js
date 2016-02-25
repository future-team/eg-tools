'use strict';
export BindReact  from './BindReact';
export createReducer from './createReducer';
export fetch from './fetch';
export {fetching} from './fetching';

window['Eagle'] = {};

[
    'BindReact','createReducer','fetch','fetching'
].forEach(function(clazzName){
        Eagle[clazzName] =exports[clazzName];
    });