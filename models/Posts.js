const mongoose = require('mongoose');

const Post= new mongoose.Schema({
    test:{
        type:String,
        required: true,
    },
    content:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required: true,
    },
    datestamp:{
        type:Date,
        required: true,
        default: Date.now 
    },
})

module.exports = mongoose.model('Post', Post)