const http=require("http");

const server=http.createServer((req,res)=>{

    server.on('connection',(socket)=>{
        console.log("new connec");
    });
    
    if(req.url==='/'){
        res.write("hello");
        res.end();
    }

    if(req.url==='/o'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});



server.listen(3000);

console.log("connected on port 3000");