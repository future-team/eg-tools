import querystring from 'querystring';

export  function isMock() {
    let location = window.location,
        localhost =/127.0.0.1|localhost/.test(location.hostname) && location.href.indexOf('8080')<0,
        mockParam =!!(querystring.parse(location.search && location.search.substring(1)).mock);
    return localhost || mockParam;
};