const router = require('express').Router();
const Event = require('../models/Event');


// Get all 
router.get('/', (req, res) => {
    Event.find({})
    .then(post => {
        // convert to JSON
        res.json(post)
    })
    .catch(err => {
        console.log(err)
      })
})

module.exports = router;