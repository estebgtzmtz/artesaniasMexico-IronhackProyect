const { Router } = require('express');
const router = Router();

const { craftmanGet, craftmanDetailGet } = require('../controllers/craftmanController');

router.get('/craftman', craftmanGet);
router.get('/craftman/detail/:craftmanID', craftmanDetailGet);

module.exports = router;