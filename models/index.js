const mongoose = require('../db/connection');

module.exports = {
    User: mongoose.model("User", require('./User')),
    Event: mongoose.model("Event", require('./Event').Event),
    RSVP: mongoose.model("RSVP", require("./Event").RSVP)
}
