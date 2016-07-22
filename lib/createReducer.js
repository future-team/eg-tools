'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = createReducer;

function createReducer(reducerName, initialState, handlers) {

    if (arguments.length <= 2) {
        handlers = _extends({}, initialState);
        initialState = reducerName;
    }

    handlers[reducerName + '_BINDING_UPDATE'] = function (data, action) {
        return data.setIn(action.path, action.value);
    };

    return function (state, action) {
        if (state === undefined) state = initialState;

        return handlers[action.type] ? handlers[action.type](state, action) : state;
    };
}

module.exports = exports['default'];