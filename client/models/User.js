const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RSVP = require('./Event');


const User = new Schema({
    username: String,
    email: String,
    password: String,
    phone: String,
    location: String,
    rsvp: [RSVP],

    event: {
        type: Schema.Types.ObjectId,
        ref: "Event"
    }
});

module.exports = User