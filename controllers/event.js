const Event = require('../models/Event');

module.exports = {
    // Show all event postings
    index: (req, res) => {
        Event.find({})
        .then(post => {
            // convert to JSON
            res.json(post)
        })
        .catch(err => {
            console.log(err)
          })
    }
}