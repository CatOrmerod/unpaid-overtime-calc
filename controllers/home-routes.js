const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('form');
});

router.get('/admin', withAuth, async (req, res) => {
    res.render('admin');
});

router.get('/entry', withAuth, async (req, res) => {
    res.render('form');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

// router.get('/results', async (req, res) => {
//     res.render('results');
// });


module.exports = router;