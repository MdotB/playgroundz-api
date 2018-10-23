const mongoose = require('../db/connection');
const Schema = mongoose.Schema;
const Event = require('./Event');
const RSVP = require('./RSVP');

const User = new Schema({
    username: String,
    email: String,
    password: String,
    phone: String,
    location: String,
    rsvp: [],
        
    event: {
        ref: [Event]
    }
});

module.exports = mongoose.model('User', User);