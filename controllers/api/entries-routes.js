const router = require('express').Router();
const nodemailer = require('nodemailer');
const { Entry } = require('../../models');

// Create new entries
router.post('/', async (req, res) => {
  const {
    email,
    industry,
    start,
    end,
    lunch,
    salary,
    unpaidHours,
    unpaidSalary,
  } = req.body;
  console.log(req.body);

  const entryResult = await Entry.create({
    industry,
    salary,
    start,
    end,
    lunch: lunch === 'yeslunch',
    unpaidHours,
    unpaidSalary,
    email,
  });

  res.json({
    success: true,
    entryResult,
  });

  var mailOptions = {
    from: '"Unpaid Overtime" <unpaidovertimecalculator@gmail.com>',
    to: req.body.email,
    subject: 'Thanks for using the unpaid overtime calculator',
    text: `Hey ${req.body.email}, thanks for using our unpaid overtime calculator :)`,
    html: `<b>Hey ${req.body.email}! </b><br><br>You worked ${req.body.unpaidHours} hours for a total of $${req.body.unpaidSalary}, was it worth it?<br><br> Sign our petition to end unpaid overtime.
      <br>
      <br>
       Do you know anyone else who might like using this calculator? <br>Share them this link: <br><br> 
      Thanks,<br>
      <b>The unpaid overtime team</b>`,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
});

var transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'unpaidovertimecalculator@gmail.com',
    pass: process.env.pass,
  },
});

module.exports = router;