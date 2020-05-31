console.log("hi");
var fs=require("fs");

fs.readFile('i.txt',(err,data)=>{
    if(err) console.log("error ocured");
    console.log(data.toString());
});

console.log("bye");