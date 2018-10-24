const { Event, User } = require('../models/index');
const data = require('./data.json');
const UserData = require("./UserData.json")

Event.remove({})
    .then(_ => {
        Event.collection.insert(data)
            .then(seedEntries => {
                console.log(seedEntries)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err);
    });
User.remove({})
    .then(_ => {
        User.collection.insert(UserData)
            .then(seedStuff => {
                console.log(seedStuff)
                process.exit()
            })
    })