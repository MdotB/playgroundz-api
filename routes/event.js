const router = require('express').Router();
const controller = require('../controllers/event.js');


// Get all
router.get('/', controller.index)

module.exports = router;