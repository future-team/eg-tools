export default function createReducer(initialState,handlers){

    return (state = initialState,action )=>{

        return handlers[action.type] ?
            handlers[action.type](state, action) :
            state;
    }
}