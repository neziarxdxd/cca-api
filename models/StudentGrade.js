const mongoose = require('mongoose');

const StudentGrade= new mongoose.Schema({
    studentName:{
        type:String,
        required: true,
    },
    
    studentID:{
        type:String,
        required: true,
    },
    

    gradeList:{
        type:Array,
        required: true,
    },
    datestamp:{
        type:Date,
        required: true,
        default: Date.now 
    },
})

module.exports = mongoose.model('StudentGrade', StudentGrade)