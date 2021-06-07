const router = require('express').Router();
const { Admin, Entry } = require('../../models');

// Get all users - Just for testing - REMOVE THIS LATER
router.get('/get-all-users', async (req, res) => {
  const admins = await Admin.findAll();
  res.json({ admins });
});

router.get('/get-all-entries', async (req, res) => {
  const entries = await Entry.findAll();
  res.json({ entries });
});

module.exports = router;
