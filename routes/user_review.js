const express = require('express');
const router = express.Router();
const controller = require("../controllers/index")

router.post('/add', controller.userPost);
router.get('/', controller.userGet);

module.exports = router;