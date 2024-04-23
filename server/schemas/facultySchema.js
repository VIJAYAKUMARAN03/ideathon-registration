const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')


const facultySchema = new Schema({
    email:{ 
        type: String, 
        required: true 
    },
    password:{ 
        type: String, 
        required: true 
    },
    name:{ 
        type: String, 
        required: true 
    },
    facultyid:{
        type: String, 
        required: true 
    },
    dpt:{
        type: String,
        required: true
    },
    phoneno:{
        type:Number,
        required:true
    },
    ideas: [{ type: Schema.Types.ObjectId, ref: 'Idea' }]

});

facultySchema.pre('save',async function (next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next();
})



module.exports.Faculty = mongoose.model('Faculty', facultySchema);


