const Joi=require("joi");

const express=require("express");

const app=express();
app.use(express.json());

const courses=[
    {
        id:1,name:'course1'
    },
    {
        id:2,coursename:'course2'
    },
    {
        id:3,coursename:'course3'
    }
];

app.get('/po',(req,res)=>{
    res.send(courses);
});
app.post('/api/courses/',(req,res)=>{
    const schema={
        name : Joi.string().min(3).required()

     };

    const result=Joi.validate(req.body,schema);

    if(result.error){
    res.status(400).send(result.error.details[0].message);
    return;
}

    const course={
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(courses);
});


app.put('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) return res.status(400).send("no");

   const {error}=validateCourse(req.body);


    if(error){
        return res.status(400).send(error.details[0].message);
        
    }
    course.name=req.body.name;
    res.send(course);
});
    function validateCourse(course){
        const schema={
            name : Joi.string().min(3).required()
    
         };
    
        return Joi.validate(req.body,schema);
    }


app.delete('/api/courses/:id',(req,res)=>{
const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) return res.status(400).send("no");


    const index=courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});



const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`connect on port ${port}`);
});