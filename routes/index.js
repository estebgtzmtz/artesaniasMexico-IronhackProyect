const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const { signupGet, signupPost, loginGet, logout } = require('../controllers/authControllers')
const { productsGet, productDetailGet } = require('../controllers/productsController')
const { craftmanGet, craftmanDetailGet } = require('../controllers/craftmanController');

router.get('/products', productsGet);
router.get('/products/detail/:id', productDetailGet);

router.get('/craftman', craftmanGet);
router.get('/craftman/detail/:craftmanID', craftmanDetailGet);

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/signup', signupGet);
router.post('/signup', signupPost);
router.get('/login', loginGet);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
}));
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