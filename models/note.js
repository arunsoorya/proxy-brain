
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const noteSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    details : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

mongoose.model('Note', noteSchema)