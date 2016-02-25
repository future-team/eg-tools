import request from './request';

let notnull=function(){};

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


function fetch(url,params={},success=notnull,error=notnull,opts={}){

    opts.success = function(data,xhr){
        hideLoading();
        success(data,xhr);
    };
    opts.error = function(xhr){
        hideLoading();
        error(xhr);
    };
    opts.data = params;

    showLoading();
    request.fetch(url,opts );
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