const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ideaSchema = new Schema({
    title:{ 
        type: String, 
        required: true
    },
    description:{ 
        type: String, 
        required: true 
    },
    teamid : {
        type: String, 
        required: true
    },
    teamName : {
        type: String, 
        required: true
    },
    students:[{ 
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }],
    mentorid : {
        type: String, 
        required: true
    },
    mentor_verified :{
        type : Boolean,
        default:false
    },
    submittedAt:{
        type: Date, 
        default: Date.now() 
    },
    shortlisted:{ 
        type: Boolean,
        default: false 
    },
    data:{
        type : JSON
    },
    abstract : [{
        type : String
    }],
    ppt : [{
        type : String
    }],
    pic : [{
        type : String
    }],
    AD : {
        type: Number
    }, 
    CS : {
        type: Number
    }, 
    AL : {
        type: Number
    }, 
    MR : {
        type: Number
    }
});



module.exports.Idea = mongoose.model('Idea', ideaSchema);