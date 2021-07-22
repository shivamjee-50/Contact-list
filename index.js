const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));
app.use(express.static('./assets'));

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }

    console.log('Yup! My Express server is running on Port:', port);
});