const EventEmitter=require("events");
const emitter=new EventEmitter();



emitter.on('sg',(arg)=>{
console.log("event logged",arg);
})
.on('logging',(data)=>{
    console.log(data);
})

emitter.emit('sg',{id:1,ur:"http"});

emitter.emit('logging',{data:"logging"});
