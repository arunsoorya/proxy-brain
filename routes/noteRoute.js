const expresslib = require('express')
const routes = expresslib.Router();
var mongose = require('mongoose');



//#################### Creating models ##############################

require('../models/note')
const Note = mongose.model('Note')

//#################### Creating Routes ##############################
routes.get('/', (request, response) => {
    response.sent({express:"got you"})
})

module.exports =  routes;