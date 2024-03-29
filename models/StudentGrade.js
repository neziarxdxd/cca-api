const mongoose = require('mongoose');

const StudentGrade= new mongoose.Schema({
    studentName:{
        type:String,
        required: false,
    },
    
    studentID:{
        type:String,
        required: true,
    },
    

    gradeList:{
        type:Array,
        required: false,
    },
    datestamp:{
        type:Date,
        required: false,
        default: Date.now 
    },
})

module.exports = mongoose.model('StudentGrade', StudentGrade)