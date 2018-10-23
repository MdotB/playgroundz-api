const router = require('express').Router();
const { Event } = require("../models/index");



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
// create a new Event
router.post("/new", (req, res) => {
    Event.create()
        .then(newEvent => {
            res.json(newEvent)
        })
        .catch(err => {
            console.log(err)
        })
})
router.delete('/delete/:id', (req, res) => {
    Event.findOneAndDelete({_id: req.params.id})
    .then(event => {})
    .catch(err => {
        console.log(err)
    })
});
module.exports = router;