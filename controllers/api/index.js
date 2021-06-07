const router = require('express').Router();

const apiRoutes = require('./api-routes');
const adminRoutes = require('./admin-routes');
const entriesRoutes = require('./entries-routes');


router.use('/', apiRoutes);
router.use('/admin', adminRoutes);
router.use('/entry', entriesRoutes);
router.use('/results', resultsRoute);


module.exports = router;
