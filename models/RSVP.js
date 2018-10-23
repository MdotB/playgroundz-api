const mongoose = require('../db/connection');
const Schema = mongoose.Schema;
const User = require('./User');

const RSVP = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    attending: Boolean
})

module.exports = mongoose.model('RSVP', RSVP);

