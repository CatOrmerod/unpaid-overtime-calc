const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Entry } = require('../models');
const sequelize = require('../config/connection');
const ObjectsToCsv = require('objects-to-csv');

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

router.get('/admin', withAuth, async (req, res) => {
  try {
    const userData = await Entry.findAll({});
    // Serialize data so the template can read it
    const users = userData.map((user) =>
      user.get({
        plain: true,
      })
    );
    console.log(users);
    console.log('logged in status', req.session.logged_in);
    // Pass serialized data and session flag into template
    res.render('admin', {
      logged_in: req.session.logged_in,
      users,
    });
    const csv = new ObjectsToCsv(users);

    // Save to file:
    csv.toDisk('./csv/calc-signups.csv');

    // Return the CSV file as string:
    console.log(await csv.toString());
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/csv', async (req, res) => {
  const file = await `./csv/calc-signups.csv`;
  res.download(file); // Set disposition and send it.
});

module.exports = router;
