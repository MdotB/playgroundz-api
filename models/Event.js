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
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    eventDate: String,
    locationImg: String,
    age: {
        type: Number,
        min: 1,
        max: 17,
        required: true
    },
    rsvps: [RSVP]
})

module.exports = {
    Event: Event,
    RSVP: RSVP
}
