const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('login');
});

router.get('/admin', async (req, res) => {
    res.render('admin');
});

router.get('/add-entry', async (req, res) => {
    res.render('form');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

module.exports = router;