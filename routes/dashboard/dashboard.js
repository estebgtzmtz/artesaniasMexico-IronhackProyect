const { Router } = require('express');
const router = Router();
const upload = require('../../config/cloudinary')
const { dashboardGet, dashboardPost, dashboardDelete, detailGet, createProductPost, deleteProductGet } = require('../../controllers/dashboardControllers');


router.get('/dashboard', dashboardGet);
router.post('/dashboard', upload.single('img'), dashboardPost);
router.get('/dashboard/:id', dashboardDelete);
router.get('/dashboard/detail/:id', detailGet);
router.post('/dashboard/createProduct/:craftmanID', upload.single('img'), createProductPost)
router.get('/dashboard/deleteProduct/:productID', deleteProductGet)
module.exports = router;