const { Router } = require('express');
const router = Router();
const { dashboardGet, dashboardPost } = require('../../controllers/dashboard/dashboardController');


router.get('/dashboard', dashboardGet);
router.post('/dashboard', dashboardPost);


module.exports = router;