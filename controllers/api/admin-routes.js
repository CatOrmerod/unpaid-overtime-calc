const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Admin, Entry } = require('../../models');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await Admin.findOne({
    where: {
      email,
    },
  });
  console.log(user);
  if (!user) {
    return res.status(400).json({
      message: 'Incorrect email or password, please try again',
    });
  }
  const validPassword = await user.checkPassword(password);

  if (!validPassword) {
    res.status(400).json({
      message: 'Incorrect email or password, please try again',
    });
    return;
  }

  const { id, name } = user;

  req.session.save(() => {
    req.session.user_id = id;
    req.session.username = email;
    req.session.logged_in = true;

    res.json({
      id,
      name,
      email,
      message: 'You are now logged in!',
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
