const router = require('express').Router();
// const withAuth = require('../../utils/auth');
const { Admin, Entry } = require('../../models');

// Create new entries
router.post('/', async (req, res) => {
  const {
    industry,
    salary,
    start,
    end,
    lunch,
    email
  } = req.body;
console.log(req.body);
  const entry = await Entry.findOne({ where: { email } });

  if (entry) {
    return res.status(400).json({
      msg: 'Email already exists',
    });
  }

  await Entry.create({
    industry,
    salary,
    start_time: start,
    end_time: end,
    had_lunch: lunch === "yeslunch",
    email
  });

  res.json({
    success: true,
  });
});

// Get total
// router.get('/get-entries-total', async (req, res) => {
//   const entries = await Entry.findAll();

//   const total = entries.reduce((total, { start_time, end_time, salary }) => {
//       if (start_time > end_time) {
//           start_time = start_time - 24;
//       }

//       const workedHours = end_time - start_time;
//       if (0 > workedHours) console.log('THERE IS AN ERROR', end_time, start_time)

//       return total + salary * workedHours;
//   }, 0);

//   res.json({ total });
// });

module.exports = router;
