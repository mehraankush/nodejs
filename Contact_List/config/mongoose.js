const mongoose = require('mongoose');
// conntect to the database 
mongoose.connect('mongodb://127.0.0.1/contacts_list_db');

// aquire connection to to check if it is succesful
const db = mongoose.connection;

// if error print error
db.on('error',console.error.bind(console,"error connecting to db"));
// if up and running print success message
db.once('open', function(){
    console.log('succesfully connected to the batabases');
}); 