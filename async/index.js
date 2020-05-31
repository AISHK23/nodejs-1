console.log("first");


getuser(1,function(user){
    repos(user.name,function(r){
        console.log("repo",r);
    });

});
//const p=getuser(1);
//p.then(user=>console.log(user));

getuser(1)
.then(user=>repos(user.name))
.then(r=>console.log(r))
.catch(err=>console.log('error',err.message));

console.log("second");


function getuser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("connecting");
            resolve({id:id,name:"aishu"});
            
                },2000);
    })
    
};

function repos(uname){
    return new Promise((resolve,reject)=>{
setTimeout((ar)=>{
resolve(['repo1','repo2']);
},2000);
});
}