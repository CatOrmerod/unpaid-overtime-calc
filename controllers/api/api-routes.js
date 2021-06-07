const router = require('express').Router();
const { Admin, Entry } = require('../../models');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const result = await Admin.findOne({
    where: { email },
    include: [],
  });

  if (!result) {
    return res.json({ msg: 'User does not exist' });
  }

  if (result.password !== password) {
    return res.json({ msg: 'Invalid password' });
  }

  res.json({
    loggedIn: true,
  });
});

// Create new entries
router.post('/entry', async (req, res) => {
  const { industry, salary, start_time, created_at, created_at2, name, email } =
    req.body;

    console.log('DATA', {
      industry,
      salary,
      start_time,
      created_at,
      created_at2,
      name,
      email,
    })

  await Entry.create({
    industry,
    salary,
    start_time,
    created_at,
    created_at2,
    name,
    email,
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
