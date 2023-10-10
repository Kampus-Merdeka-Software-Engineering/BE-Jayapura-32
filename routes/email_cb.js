const express = require('express');
const router = express.Router();
const controller = require("../controllers/index")

router.post('/add', controller.emailPost);
router.post('/', controller.emailGet);

module.exports = router;