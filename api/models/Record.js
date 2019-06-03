
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
    // dayOfMonth: {
    //     type: String,
    //     required: true
    // },
    label : {
        type : String,
        required : false
    },
    description : {
        type : String,
        required : false
    },
    notes :[]
})
mongoose.model('Record', recordSchema)
