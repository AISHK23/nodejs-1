const http=require("http");

const server=http.createServer();

server.on('connection',(socket)=>{
    console.log("new connec");
});

server.listen(3000);

console.log("connected on port 3000");