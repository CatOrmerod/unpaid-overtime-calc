const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const resultsRoute = require('./api/resultsRoute');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/results', resultsRoute);


module.exports = router;
