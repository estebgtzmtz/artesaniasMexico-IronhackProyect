const { Router } = require('express');
const router = Router();
const { profileGet } = require('../controllers/privateControllers');
const { isAuthenticated } = require('../middlewares/index');

router.get('/profile', isAuthenticated, profileGet);

module.exports = router;