// const email_cb = require('../controllers/email_cb');
// const router = require('express').Router();
const express = require('express');
const router = express.Router();
const controller = require("../controllers/index")

router.post('/add', controller.emailPost);
router.post('/', controller.emailGet);

module.exports = router;