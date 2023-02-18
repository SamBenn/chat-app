const express = require('express');
const router = express.Router();

const controller = require('../controllers/messagesController')

router.get('/getMessagesForThread/:id', controller.getAllForThread)

module.exports = router;