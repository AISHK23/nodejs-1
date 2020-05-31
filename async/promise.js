const p1=new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('async oper11111');
        resolve(1);
    },2000);

});


const p2=new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('async oper22222');
        resolve(2);
    },2000);

});

Promise.all([p1,p2])
.then(result=>console.log(result));