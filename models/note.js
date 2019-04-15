
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const noteSchema = new Schema({
    label: {
        type: String,
        required: false
    },
    year : {
        type : String,
        required : true
    },
    dayOfMonth : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : false
    },
    date : {
        type : Date,
        default : Date.now
    }
})
 


mongoose.model('Note', noteSchema)