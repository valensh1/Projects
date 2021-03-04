// Importing of Needed Modules
require('dotenv').config(); // process.env file
console.log(process.env.MONGO_URI ? 'linked' : 'not working'); // this process.env.MONGO_URI ternary is making sure its reading our .env file correctly
const express = require('express'); // importing express
const app = express(); // invoking express so it will run
const mongoose = require('mongoose'); // import mongoose to work with our MongoDB database
const methodOverride = require('method-override'); // Middleware to make post request with delete. Must match name on Index.jsx
const { update } = require('./models/music');
const PORT = 5000;

//---------------------------------MODEL----------------------------------------------
const Music = require('./models/music'); //importing from music.js to be able to use Mongoose



// ------------------------------MIDDLEWARE--------------------------------------------
// Body Parser Middleware to give us access to req.body
app.use(express.urlencoded({extended:true})); // parse form data into req.body object. Can't process form data without this Middleware
app.use(express.json()); // raw json data
app.use((req, res, next)=>{ // debugger to log our req.body object each time we hit a route
    console.log(req.body)
    next()
   });
app.use(methodOverride('_method')); // Middleware - underscore is used to capture query parameter. I could name this underscore anything. This needs to match query parameter we create.
app.use(express.static("public"));


// Set up view engines to be able to show views to the user via the jsx files
   app.set('view engine', 'jsx'); // setting up jsx view
   app.engine('jsx', require('express-react-views').createEngine()); // parser for jsx files


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true, // all these are required and it means you are just opting into new features of Mongo DB. Don't really need to know these
    useCreateIndex: true,
    useUnifiedTopology:true
})

mongoose.connection.once('connected', () => console.log('Mongoose is all ready for MusicStore'));


//-------------------------------ROUTES-------------------------------------------------

// INDEX ROUTE - shows user collection of music to purchase
app.get('/music', (req, res) => {
    Music.find({}, (err, foundMusic) => {
        if(!err){
            //console.log(foundMusic);
            res
            .status(200)
            .render('Index', {music: foundMusic}) // pass the this.props object over to the Index page
        } else {
            res
            .status(400)
            .send(err)
        }
    })
    
})



// NEW ROUTE - - display a form for user to create something so the user can do the create function (stricly just shows them form)
app.get('/music/new', (req, res) => {
    res
    .render('New');
})



// DELETE ROUTE
app.delete('/music/:id', (req, res) => {
    Music.findByIdAndDelete(req.params.id, (err, deletedMusic) => {
        if(!err){
            res
            .status(200)
            .redirect('/music');
        } else {
            res
            .status(400)
            .json(err)
        }
    })
})


// UPDATE ROUTE
app.put('/music/:id', (req, res) => {
    Music.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMusic) => {
        if(!err){
            res
            .status(200)
            .redirect('/music')
        } else {
            res
            .status(400)
            .send(err)
        }
    })
})


// CREATE ROUTE - User enters data and creates an item and this route processes their inputs into the database.
app.post('/music', (req, res) => {
    Music.create(req.body, (err, newMusic) => {
        if(!err){
            res
            .status(200)
            .redirect('/music');
        } else {
            res
            .status(400)
            .send(err)
        }
    })
})


// EDIT ROUTE - shows user a form which allows them to do update function (strictly just shows them form)
app.get('/music/:id/edit', (req, res) => {
    Music.findById(req.params.id, (err, foundMusic) => {
        if(!err){
            res
            .status(200)
            .render('Edit', {
                music : foundMusic // this is the this.props object send to Edit.jsx
            })
        } else {
            res
            .status(400)
            .send(err)
        }
    })
})


// SHOW ROUTE
app.get('/music/:id', (req, res) => {
    console.log(req.params.id)
    Music.findById(req.params.id, (err, foundMusic) => {
        if(!err){
            res
            .status(200)
            .render('Show', {
                music: foundMusic
            })
        } else {
            res
            .status(400)
            .send(err)
        }
    })
})

app.get('/music/buy/:id', (req, res) => {
    Music.findById(req.params.id, (err, foundMusic) => {
        if(!err){
            res
            .status(200)
            .render('Buy', {
                music : foundMusic // this is the this.props object send to Edit.jsx
            })
        } else {
            res
            .status(400)
            .send(err)
        }
    })
})

app.get(`/music/buy/:id/completedPurchase`, (req, res) => {
    Music.findByIdAndUpdate(req.params.id, {$inc: {quantity: -1}}, (err, foundMusic) => {
        if(!err){
            res
            .status(200)
            .redirect('/music')
        } else {
            res
            .status(400)
            .send(err)
        }
    })
})





app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
