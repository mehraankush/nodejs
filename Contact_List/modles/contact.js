const mongoosh = require('mongoose');

const createSchema = new mongoosh.Schema({
    name:{
        type: String,
        required: true,
    },
    Phone:{
        type: String,
        required: true,
    }
})

const Contact = mongoosh.model('Contact', createSchema);

module.exports = Contact;