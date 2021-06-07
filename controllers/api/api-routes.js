const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Admin, Entry } = require('../../models');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await Admin.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({ msg: 'User does not exist' });
  }

  if (user.password !== password) {
    return res.status(400).json({ msg: 'Invalid password' });
  }

  const { id, name } = user;

  req.session.save(() => {
    req.session.user_id = id;
    req.session.username = email;
    req.session.logged_in = true;

    res.json({ id, name, email, message: 'You are now logged in!' });
  });
});

// Create new entries
router.post('/entry', withAuth, async (req, res) => {
  const {
    industry,
    salary,
    start_time,
    end_time,
    had_lunch,
    name,
    email,
    created_at,
  } = req.body;

  const entry = await Entry.findOne({ where: { email }});

  if (entry) {
    return res.status(400).json({
      msg: 'Email already exists'
    })
  }

  await Entry.create({
    industry,
    salary,
    start_time,
    end_time,
    had_lunch,
    name,
    email,
    created_at,
  });

  res.json({
    success: true,
  });
});

// Get all users
router.get('/get-all-users', async (req, res) => {
  const admins = await Admin.findAll();
  res.json({ admins });
});

// Get all entries
router.get('/get-all-entries', async (req, res) => {
  const entries = await Entry.findAll();
  res.json({ entries });
});

module.exports = router;
