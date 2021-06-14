const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const resultRoutes = require('./results-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/results', resultRoutes);

module.exports = router;