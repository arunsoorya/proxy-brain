
const expresslib = require('express')
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongose = require('mongoose');
var session = require('express-session') 
var path = require('path')

// var flash = require('connect-flash')
const methodOverride = require('method-override')
const app = expresslib()


const port = 4021
app.listen(port, () => {
    console.log(`connected to port ${port}`)
})
//connecting to databaase
mongose.connect("mongodb://localhost/proxybrain", { useNewUrlParser: true })
    .then(() => {
        console.log('Mongodb connected...')
    }).catch(error => {
        console.log(`Error connecting database - ${error}`)
    });


//#################### Importing Routes ##############################
const noteRoute = require('./routes/noteRoute') 
 
//################### Initalization ##############################
//init body-parser
//init body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    // cookie: { secure: true }
  }));
// app.use(flash()); 
//routing to the folder
app.use('/note', noteRoute) 
app.use(expresslib.static(path.join(__dirname, 'public')))