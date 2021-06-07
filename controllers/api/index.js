const router = require('express').Router();

const apiRoutes = require('./api-routes');
const adminRoutes = require('./admin-routes');

router.use('/', apiRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
