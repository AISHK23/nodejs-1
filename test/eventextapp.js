const EventEmitter=require("events");
const Logger=require('./app.js');
const logger=new Logger();

logger.on("msg",(arg)=>{
    console.log("app",arg);
});
logger.log('maishu');