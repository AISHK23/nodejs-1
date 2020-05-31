const express=require("express");
const app=express();

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

app.use(express.json());

app.get('/po',(req,res)=>{
    res.send(courses);
})


app.get('/api/courses/:id',(req,res)=>{
    const r=courses.find(c=>c.id===parseInt(req.params.id));
    if(!r) res.status(400).send("no");
    res.send(r);
});

app.post('/api/courses/',(req,res)=>{
    const course={
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(courses);
});


const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`connect on port ${port}`);
});

