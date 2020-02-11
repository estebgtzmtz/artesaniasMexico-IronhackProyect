const { Router } = require('express');
const router = Router();
const { dashboardGet, dashboardPost, dashboardDelete } = require('../../controllers/dashboardControllers');


router.get('/dashboard', dashboardGet);
router.post('/dashboard', dashboardPost);
router.get('/dashboard/:id', dashboardDelete);

module.exports = router;