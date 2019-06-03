const expresslib = require('express')
const routes = expresslib.Router();
var mongose = require('mongoose');

//#################### Creating models ##############################

require('../models/note')
const Note = mongose.model('Note')
require('../models/Record')
const Record = mongose.model('Record')

//#################### Creating Routes ##############################
routes.post('/save', (request, response) => {

    const dayOfMonth = request.body.dayOfMonth
    const note = new Note(request.body)
    console.log(dayOfMonth)
    console.log(note)
    // new Record().update({$push :{notes: note}}).then(val=>{      response.json(
    // val); })
    new Note(note)
        .save()
        .then(res => {
            const resObj = {
                status: true
            }
            console.log(resObj)
            response.json(resObj);
        })

})
routes.get('/notes', (req, res) => {
    Note.find({})
        .then(users => {
            res.send(users);
        });

})

module.exports = routes;