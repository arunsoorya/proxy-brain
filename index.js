
const expresslib = require('express')
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongose = require('mongoose');
var session = require('express-session') 
var path = require('path')
const app = expresslib()


const port = 4006
app.listen(port, () => {
    console.log(`connected to port ${port}`)
})

//#################### Importing Routes ##############################
const noteRoute = require('./routes/noteRoute') 
 
//################### Initalization ##############################
//init body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(methodOverride('_method'))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    // cookie: { secure: true }
  })); 
//routing to the folder
app.use('/note', noteRoute) 
app.use(expresslib.static(path.join(__dirname, 'public')))