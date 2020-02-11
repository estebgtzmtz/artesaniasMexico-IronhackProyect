const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const { signupGet, signupPost, loginGet, logout } = require('../controllers/authControllers')

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/signup', signupGet);
router.post('/signup', signupPost);
router.get('/login', loginGet);
router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    })
);

// Google auth Routes
router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    })
);
router.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    })
);

router.get('/logout', logout);

module.exports = router;