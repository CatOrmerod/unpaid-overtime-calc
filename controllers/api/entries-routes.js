const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Admin, Entry } = require('../../models');

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

  const entry = await Entry.findOne({ where: { email } });

  if (entry) {
    return res.status(400).json({
      msg: 'Email already exists',
    });
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

// Get total
router.get('/get-entries-total', async (req, res) => {
  const entries = await Entry.findAll();

  const total = entries.reduce((total, { start_time, end_time, salary }) => {
    if (start_time > end_time) {
      start_time = start_time - 24;
    }

    const workedHours = end_time - start_time;
    // if (0 > workedHours) console.log('THERE IS AN ERROR', end_time, start_time)

    return total + salary * workedHours;
  }, 0);

  res.json({ total });
});

router.get('/get-salary', async (req, res) => {
  const payment = 7;
  const extraPayment = 10;

  const entries = (await Entry.findAll()).map((entry) => {
    let {
      id,
      industry,
      had_lunch,
      name,
      email,
      created_at,
      start_time,
      end_time,
      salary,
    } = entry;

    const offset = start_time > end_time ? 24 : 0;

    const workedHours = end_time - (start_time - offset);

    if (0 > workedHours) console.log('THERE IS AN ERROR', end_time, start_time);
    
    const regularHours = Math.min(8, workedHours);
    const extraHours = workedHours - regularHours;

    const regular_salary = regularHours * payment;
    const extra_salary = extraHours * extraPayment
    const daily_salary = regular_salary + extra_salary;

    console.log(daily_salary);

    return {
      id,
      industry,
      had_lunch,
      name,
      email,
      created_at,
      start_time,
      end_time,
      regularHours,
      extraHours,
      salary,
      regular_salary,
      extra_salary,
      daily_salary,
    }
  });

  res.json({ entries });
});

module.exports = router;
