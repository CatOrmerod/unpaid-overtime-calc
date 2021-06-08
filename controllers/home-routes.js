const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('form');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/admin', withAuth, async (req, res) => {
    res.render('admin');
});




module.exports = router;