const email_cb = require('../controllers/email_cb');
const router = require('express').Router();

router.post('/add', email_cb.create);
router.get('/', email_cb.findAll);

module.exports = router;