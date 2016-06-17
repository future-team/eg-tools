import request from './request';

let dispatch;

function showLoading(){
    dispatch({
        type:'fetch_begin'
    });
}

function hideLoading(){
    dispatch({
        type:'fetch_end'
    });
}


function fetch(url,params={},success,error='notnull',opts={}){

    opts.success = function(data,xhr){
        hideLoading();
        success && success(data,xhr);
        fetch.successEvent(xhr)
    };
    opts.error = function(xhr){
        if(error=='notnull'){
          fetch.errorEvent(xhr)
        }else{
            error && error(xhr);
        }
        hideLoading();
    };
    opts.data = params;

    showLoading();
    request.fetch(url,opts );
}
fetch.errorEvent=()=>{
}
fetch.successEvent=()=>{
}

fetch.middleware = store=>{

    dispatch = store.dispatch;
    return next=>{
        return action=> {
            return next(action);
        }
    }
}

export default fetch;