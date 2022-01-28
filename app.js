require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const StudentGrade = require('./models/StudentGrade')
// ROUTES 
mongoose.connect(
process.env.DATABASE_URL,
{ useNewUrlParser: true,useUnifiedTopology: true},

()=>console.log("THANK YOU LORD")
);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.use(express.json())

app.post('/post', async (req,res)=>{

const post = new StudentGrade({
studentID:req.body.studentID,
studentName: req.body.studentName, 
gradeList:req.body.gradeList,
})
try {
const newPost = await post.save()
res.status(201).json(newPost)
} catch (err) {
res.status(400).json({ message: err.message })
}
});


//fgfgz
app.get('/', async (req, res) => {
try {
const getPost = await StudentGrade.find()
res.json(getPost)
} catch (err) {
res.status(500).json({ message: err.message })
}
})
// todo 
app.get('/:id', getPost ,(req, res) => {
res.json(res.post)
})
//  fdf
app.patch('/update/:id', getPost , async (req, res) => {


res.body.studentID=  req.body.studentID
res.body.studentName= req.body.studentName 
res.body.gradeList=req.body.gradeList



try{

const updatePost = await res.post.save()
res.json(updatePost)
}
catch(err){

res.status(400).json({message: err.message})
}
})


app.delete('/remove/:id', getPost , async (req, res) => {


try{
await res.post.remove();
res.json({ message: 'Deleted Post' })
}
catch(err){

res.status(500).json({message: err.message})
}
})

app.get('/user',(req,res)=>{
res.send("WE ARE ON USER");
});

// TODO: 
// Create put, and delete


async function getPost(req, res,next){
let post 
try{

post = await StudentGrade.findById(req.params.id)

if(post==null){
return res.status(404).json({message:"EH"});
}
}

catch(err){
return res.status(500).json({ message: err.message })
}
res.post = post
next()
}


app.listen(3000);