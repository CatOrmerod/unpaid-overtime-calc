const router = require('express').Router();

const apiRoutes = require('./api-routes');
const adminRoutes = require('./admin-routes');
const entriesRoutes = require('./entries-routes');

router.use('/', apiRoutes);
router.use('/', adminRoutes);
router.use('/', entriesRoutes);

module.exports = router;
