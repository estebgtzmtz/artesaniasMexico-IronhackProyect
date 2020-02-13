const { Router } = require('express');
const router = Router();
const { profileGet } = require('../controllers/privateControllers');

router.get('/profile', profileGet);

module.exports = router;