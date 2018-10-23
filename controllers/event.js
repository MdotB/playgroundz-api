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
//Get one Event by id

router.get("/event/:id", (req, res) => {
    Event.findById({ _id: req.params.id })
        .then(showEvent => {
            res.json(showEvent)
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
    Event.findOneAndDelete({ _id: req.params.id })
        .then(event => { })
        .catch(err => {
            console.log(err)
        })
});

// sign in form 
router.post("/signup", (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        location: req.body.location,
        rsvp: req.body.user.rsvp,
        event: req.body.event
    })
        .then(newUser => {
            res.json(newUser)
        })
        .catch(err => {
            console.log(err)
        })
})
// Event updats with rsvp's
router.put("/events/rsvp/:id", (req, res) => {
    Event.findOne({ _id: req.params.id }).then(attendance => {
        attendance.rsvps.push({
            author: req.user._id,
            attending: true
        })
    })
})

module.exports = router;