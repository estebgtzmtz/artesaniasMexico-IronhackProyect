const express = require('express');
const router = express.Router();
const { signupGet } = require('../controllers/authControllers')

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/signup', signupGet);

module.exports = router;