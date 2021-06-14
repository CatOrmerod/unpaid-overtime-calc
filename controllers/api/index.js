const router = require('express').Router();
const adminRoute = require('./admin-routes');
const entriesRoute = require('./entries-routes');

router.use('/admin', adminRoute);
router.use('/entry', entriesRoute);

module.exports = router;