export default function createReducer(reducerName,initialState,handlers){

    if(arguments.length <= 2){
        handlers = {...initialState};
        initialState = reducerName;
    }

    handlers[reducerName + '_BINDING_UPDATE'] = (data, action) => {
        return data.setIn(action.path, action.value);
    };

    return (state = initialState,action )=>{

        return handlers[action.type] ?
            handlers[action.type](state, action) :
            state;
    }
}