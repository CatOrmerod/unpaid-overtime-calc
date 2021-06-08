const router = require('express').Router();
const nodemailer = require('nodemailer');
const {
  Entry
} = require('../../models');


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
    unpaidSalary

  } = req.body;
  console.log(req.body);


  await Entry.create({
    industry,
    salary,
    start,
    end,
    lunch: lunch === "yeslunch",
    unpaidHours,
    unpaidSalary,
    email
  });

  res.json({
    success: true,
  });
});





// var transport = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true, // use SSL
//   auth: {
//     user: 'watts.e.michelle@gmail.com',
//     pass:  process.env.pass,
//   }
// });


// route to add a user
// router.post('/', async (req, res) => {
//   try {
//     const userData = await Entry.create({
//    industry,
//     salary,
//     start,
//     end,
//     lunch: lunch === "yeslunch",
//     unpaidHours,
//     unpaidSalary,
//     email

//     });

//     console.log(userData)
//    res.json({
//     success: true,
//   });

//     var mailOptions = {
//       from: '"Michelle Watts" <random@gmail.com>',
//       to: req.body.email,
//       subject: 'Nice Nodemailer test',
//       text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
//       html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
//     };

//     transport.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log('Message sent: %s', info.messageId);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }


// });




module.exports = router;


//       email: req.body.email,
//       industry: req.body.industry,
//       start: req.body.start,
//       end: req.body.end,
//       lunch: req.body.lunch,
//       salary: req.body.salary,
//       unpaidHours: req.body.unpaidHours,
//       unpaidSalary: req.body.unpaidSalary