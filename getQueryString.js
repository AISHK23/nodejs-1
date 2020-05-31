const url=require("url");

const getQueryString=urlString=>{
    try{
        return url.parse(urlString,true).query;

    }catch(e){
        console.error(e);
        return {};
    }
};
//return parameter : key n value like a func but exported so called module
module.exports = getQueryString;