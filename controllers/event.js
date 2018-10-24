const router = require('express').Router();
const { Event } = require("../models/index");
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const mongoose = require('mongoose')
const User = mongoose.model('User')


// signup user
router.post('/users/signup', (req, res) => {
    if (req.body.email && req.body.password) {
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({ email: req.body.email })
            .then((user) => {
                if (!user) {
                    User.create(newUser)
                        .then(user => {
                            if (user) {
                                var payload = {
                                    id: newUser.id
                                }
                                var token = jwt.encode(payload, config.jwtSecret)
                                res.json({
                                    token: token
                                })
                            } else {
                                res.sendStatus(401)
                            }
                        })
                } else {
                    res.sendStatus(401)
                }
            })
    } else {
        res.sendStatus(401)
    }
})
// login user
router.post('/users/login', (req, res) => {
    if (req.body.email && req.body.password) {
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                if (user.password === req.body.password) {
                    var payload = {
                        id: user.id
                    }
                    var token = jwt.encode(payload, config.jwtSecret)
                    res.json({
                        token: token
                    })
                } else {
                    res.sendStatus(401)
                }
            } else {
                res.sendStatus(401)
            }
        })
    } else {
        res.sendStatus(401)
    }
})


// Get all //works on postman
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
//Get one Event by id //works on postman

router.get("/event/:id", (req, res) => {
    Event.findById({ _id: req.params.id })
        .then(showEvent => {
            res.json(showEvent)
        })
        .catch(err => {
            console.log(err)
        })
})

// create a new Event //works on postman
router.post("/new", (req, res) => {
    Event.create()
        .then(newEvent => {
            res.json(newEvent)
        })
        .catch(err => {
            console.log(err)
        })
})
// delete an Event by id //works on postman
router.delete('/delete/:id', (req, res) => {
    Event.findByIdAndDelete({ _id: req.params.id })
        .then(event => {
            res.json(event)
        })
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
router.post("/event/:id/rsvp", (req, res) => {
    let { attending } = req.body
    Event.findById({ _id: req.params.id }).then(event => {
        console.log('event: ', event)
        console.log('rsvps before: ', event._doc.rsvps)
        event._doc.rsvps.push({
            attending,
            author: 'ashjfanleuola',
        })
        console.log('rsvps after: ', event._doc.rsvps)
        event.save()
        res.json(event)
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router;