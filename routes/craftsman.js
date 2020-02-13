const { Router } = require('express');
const router = Router();

const { craftmanGet } = require('../controllers/craftmanController');

router.get('/craftman', craftmanGet);

module.exports = router;