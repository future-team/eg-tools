'use strict';
export BindReact  from './lib/BindReact';
export createReducer from './lib/createReducer';
export fetch from './lib/fetch';
export {fetching} from './lib/fetching';

window['Eagle'] = {};

[
    'BindReact','createReducer','fetch','fetching'
].forEach(function(clazzName){
        Eagle[clazzName] =exports[clazzName];
    });