import fetch from './fetch.js';

export default (url,options={body:{},method:'GET'})=>{

    //判断参数个数  一共支持3个参数 分别是url、params、options
    //url,params={},success,error='notnull',opts={}

    return new Promise(function(resolve, reject) {
        fetch(url,options.body,(data,xhr)=>{
            resolve(data,xhr);
        },(xhr)=>{
            reject(xhr);
        },options);
    });
}