var os=require("os");

var x=os.totalmem();
var y=os.freemem();

console.log(x,y);
console.log(`x ${x} y ${y}`);
