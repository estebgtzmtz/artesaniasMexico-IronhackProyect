const { Router } = require('express');
const router = Router();
const { productsGet, productDetailGet } = require('../controllers/productsController')

router.get('/products', productsGet);
router.get('/products/detail/:id', productDetailGet);
module.exports = router;