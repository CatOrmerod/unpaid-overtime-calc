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


module.exports = router;
