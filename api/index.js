
const expresslib = require('express') 
var bodyParser = require('body-parser');
var mongose = require('mongoose');
var session = require('express-session') 
var path = require('path')

// var flash = require('connect-flash')
const methodOverride = require('method-override')
const app = expresslib()


const port = process.env.PORT || 9000
app.listen(port, () => {
    console.log(`connected to port ${port}`)
})

//connecting to databaase
mongose.connect("mongodb://mongo:27017/proxybrain", { useNewUrlParser: true })
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
app.get("/", (req, res)=>{
    res.send("Server is up and running...!!")
})
app.use('/note', noteRoute) 
app.use(expresslib.static(path.join(__dirname, 'public')))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });