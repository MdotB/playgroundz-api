const router = require('express').Router();
const { Event } = require("../models/index");
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const mongoose = require('mongoose')
const User = mongoose.model('User')


//profile update 

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
                                    id: user._id
                                }
                                var token = jwt.encode(payload, config.jwtSecret)
                                res.json({
                                    token: token
                                })
                            } else {
                                res.status(401).json({ "message": "unable to create user" })
                            }
                        })
                } else {
                    res.status(401).json({ "message": "this email is already taken" })
                }
            })
    } else {
        res.status(401).json({ "message": "email & password are required" })
    }
})
// login user
router.post('/users/login', (req, res) => {
    if (req.body.email && req.body.password) {
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                if (user.password === req.body.password) {
                    var payload = {
                        id: user.id,
                        email: user.email
                    }
                    var token = jwt.encode(payload, config.jwtSecret)
                    res.json({
                        token: token
                    })
                } else {
                    res.status(401).json({ "message": "no match found" })
                }
            } else {
                res.status(401).json({ "message": "email doesn\'t exsist" })
            }
        })
    } else {
        res.status(401).json({ "message": "both fields are required" })
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

// create a new Event // works on postman
router.post("/new", (req, res) => {
    let newEvt = {
        sport: req.body.sport,
        locationName: req.body.locationName,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        eventDate: req.body.eventDate,
        locationImg: req.body.locationImg,
        age: req.body.age
    }
    Event.create(newEvt)
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
            console.log(event)
        })
        .catch(err => {
            console.log(err)
        })
});

router.post("/event/:id/:userID", (req, res) => {
    Event.findById({ _id: req.params.id }).then(event => {
        console.log(event)
        User.findOne({ _id: req.params.userID }).then(user => {
            console.log(user)
            console.log(event.rsvps)
            event.rsvps.push(user);
        }).then(_ => {
            event.save();
        })
    }).catch(err => console.log(err))
})

router.post('/event/:id?:userID', (req, res) => {
    User.findOne({ _id: req.params.userID }).then(user => {
        Event.findByIdAndUpdate({ _id: req.params.id }).then(event => {
            event.populate("user")
            event.save()
        }).catch(err => { console.log(err) })
    }).catch(error => console.log(error))
});

module.exports = router;