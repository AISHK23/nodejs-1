const express=require("express");
const logger=require('./logger.js');
const app=express();

app.use(express.json());

app.use(logger);
app.use(express.static('tst'));
const courses=[
    {
        id:1,
        coursename:'course1'
    },
    {
        id:2,
        coursename:'course2'
    },
    {
        id:3,
        coursename:'course3'
    }
];

app.get('/',(req,res)=>{
    res.send("hi");
});

const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`connect on port ${port}`);
});