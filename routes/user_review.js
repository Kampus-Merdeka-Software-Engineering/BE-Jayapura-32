const express = require('express');
const router = express.Router();
const controller = require("../controllers/index")

router.post('/addEmail', controller.emailPost);
router.post('/getEmail', controller.emailGet);
router.post('/addUser', controller.userPost);
router.get('/getUser', controller.userGet);

module.exports = router;