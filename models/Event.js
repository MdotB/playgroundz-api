const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Event = new Schema({
    location: {
        locationName: String,
        address: {
            street: String,
            city: String,
            state: String,
            zip: String
        }
    },
    eventDate: String,
    locationImg: String,
    age: {
        type: Number,
        min: 1,
        max: 17,
        required: true
    },
    groupSize: Number
})

module.exports = mongoose.model('Event', Event);