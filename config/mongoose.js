// Require the library
const mongoose = require('mongoose');

//Connect to the Database
mongoose.connect('mongodb://localhost/contacts_list_db');

//Acquire the connection to check if it is successful
const db = mongoose.connection;

//Error
db.on('error', console.error.bind(console, 'Error connecting to db'));

//Up and running and then print the message
db.once('open', function(){
    console.log('Successfully connected to database')
});