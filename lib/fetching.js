'use strict';

exports.__esModule = true;
exports.fetching = fetching;

function fetching(state, action) {
    if (state === undefined) state = 0;

    switch (action.type) {
        case 'fetch_submit_begin':
            return 2;
        case 'fetch_begin':
            return 1;
        case 'fetch_end':
            return 0;
        default:
            return state;
    }
}

;