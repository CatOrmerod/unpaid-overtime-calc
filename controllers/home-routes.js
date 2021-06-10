const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Entry, Admin } = require('../models');
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    res.render('form');
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/admin');
        return;
    }
    res.render('login');
});

// router.get('/admin', withAuth, async (req, res) => {
//     const userSumIndustry = await Entry.findAll({})
//     const users = userSumIndustry.map((user) => user.get({
//     plain: true
//   }));
//   console.log(users)
//     res.render('admin', {
//     logged_in: req.session.logged_in,    
//     users
//   });
// });

router.get('/admin', withAuth, async (req, res) => {
    try {
        // Get all blog posts and JOIN with user data
        const userData = await Entry.findAll({});
        // Serialize data so the template can read it
        const users = userData.map((user) => user.get({ plain: true }));
        console.log(users)
        console.log("logged in status", req.session.logged_in)
        // Pass serialized data and session flag into template
        res.render('admin', {
            logged_in: req.session.logged_in,
            users
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;