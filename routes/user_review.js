const router = require('express').Router();
const user_review = require('../controllers/user_review');

router.post('/add', user_review.create);
router.get('/', user_review.findAll);

module.exports = router;