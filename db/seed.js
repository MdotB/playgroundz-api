const { Event } = require('../models/Event');
const data = require('./data.json');

Event.remove({})
    .then(result => {
        Event.collection.insert(result)
            .then(seedEntries => {
                console.log(seedEntries)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err);
    });