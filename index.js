//Require Express to be used in the project
const express = require('express');
const port = 8000;

//Require mongoose to be used in the project from config folder
const db = require('./config/mongoose');
//Require Schema from the models
const Contact = require('./models/contact');

const app = express();

//Setting the view engine and the views folder
app.set('view engine', 'ejs');
app.set('views', './views');

//Setting up the router
app.use('/', require('./routes'));

//Using static files in the folder
app.use(express.static('./assets'));

//Firing up the server
app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }

    console.log('Yup! My Express server is running on Port:', port);
});