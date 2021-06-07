const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('login');
});

router.get('/admin', withAuth, async (req, res) => {
    res.render('admin');
});

router.get('/add-entry', withAuth, async (req, res) => {
    res.render('form');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

module.exports = router;