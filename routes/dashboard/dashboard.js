const { Router } = require('express');
const router = Router();
const { dashboardGet, dashboardPost, dashboardDelete, detailGet, createProductPost } = require('../../controllers/dashboardControllers');


router.get('/dashboard', dashboardGet);
router.post('/dashboard', dashboardPost);
router.get('/dashboard/:id', dashboardDelete);
router.get('/dashboard/detail/:id', detailGet);
router.post('/dashboard/createProduct/:craftmanID', createProductPost)

module.exports = router;