const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const RSVP = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    attending: Boolean
})

const Event = new Schema({
    sport: String,
    locationName: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    eventDate: Date,
    locationImg: String,
    age: {
        type: Number,
        min: 1,
        max: 17,
        required: true
    }, 
    rsvps: {
        ref: [RSVP]
    }
})

module.exports = {
    Event: mongoose.model('Event', Event),
    RSVP: mongoose.model('RSVP', RSVP)
}