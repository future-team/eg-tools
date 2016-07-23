export function fetching(state = 0, action) {
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
};