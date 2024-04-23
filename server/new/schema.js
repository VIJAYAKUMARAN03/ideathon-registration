const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const designSchema = new Schema({
    Date:{ 
        type: Date, 
        required: true 
    },
    pic:{ 
        type: String, 
        required: true 
    }
});

module.exports.Design = mongoose.model('Design', designSchema);
