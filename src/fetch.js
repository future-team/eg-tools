import request from './request';

let dispatch;

let fetching = 0;

function showLoading(method){
    if (fetching === 0) {
        dispatch({
            type: method.toLowerCase() === 'get' ?'fetch_begin':'fetch_submit_begin'
        });
    }
    fetching+=1;
}

function hideLoading(){
    fetching -= 1;
    if(fetching<=0){
        fetching = 0;
    }
    if (fetching === 0) {
        dispatch({
            type: 'fetch_end'
        });
    }
}


function fetch(url,params={},success,error='notnull',opts={}){
    const isLoadingBar = typeof(opts.isLoadingBar) =='boolean' ?opts.isLoadingBar : true;
    opts.success = function(data,xhr){
        hideLoading() ;
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

    isLoadingBar &&(showLoading(opts.method ? opts.method : 'get') );

    return request.fetch(url,opts );
}
fetch.errorEvent=()=>{
};
fetch.successEvent=()=>{
};

fetch.loadingMiddleware = store=>{

    dispatch = store.dispatch;
    return next=>{
        return action=> {
            return next(action);
        }
    }
};

export default fetch;