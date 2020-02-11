const { Router } = require('express');
const router = Router();
const { profileGet } = require('../controllers/privateControllers');
const { isAuth } = require('../middlewares/index');

router.get('/profile', isAuth, profileGet);

module.exports = router;