const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RSVP = new Schema({
    attending: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Event = new Schema({
    sport: String,
    locationName: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    eventDate: String,
    locationImg: String,
    age: Number,
    rsvps: [RSVP]
})

module.exports = {
    Event: Event,
    RSVP: RSVP
}
