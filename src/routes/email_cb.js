const express = require('express');

const UserController = require('../controller/email_cb.js');

const router = express.Router();

// CREATE - POST
router.post('/', UserController.createNewEmailCB);

// READ - GET
router.get('/', UserController.getAllEmailCB);

module.exports = router;