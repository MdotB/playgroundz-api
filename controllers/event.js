const router = require('express').Router();
const { Event } = require("../models/Event");



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
// create a Event
router.post("/new", (req, res) => {
    Event.create()
        .then(newEvent => {
            res.json(newEvent)
        })
        .catch(err => {
            console.log(err)
        })
})
router.delete('/delete', (req, res) => {

});
module.exports = router;