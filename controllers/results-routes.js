const express = require('express');
const {
  Entry
} = require('../models');
const sequelize = require('../config/connection');

const router = express.Router();

router.get('/', async (req, res) => {
  const userSumIndustry = await Entry.findAll({
    attributes: ['industry', [sequelize.fn('sum', sequelize.col('unpaid_hours')), 'total_unpaid_hours'],
      [sequelize.fn('sum', sequelize.col('unpaid_salary')), 'total_unpaid_salary']

    ],
    group: ['industry'],
    order: sequelize.literal('total_unpaid_hours DESC')
  })

  const latestEntry = await Entry.findAll({
    limit: 1,
    order: [
      ['created_at', 'DESC']
    ]
  });

  const userSumAll = await Entry.findAll({
    attributes: [
      [sequelize.fn('sum', sequelize.col('unpaid_hours')), 'total_unpaid_hours']
    ]
  })

  const userSumAll$ = await Entry.findAll({
    attributes: [
      [sequelize.fn('sum', sequelize.col('unpaid_salary')), 'total_unpaid_salary']
    ]
  })

  const userData = await Entry.findAll().catch((err) => {
    res.json(err);
  });
  const users = userData.map((user) => user.get({
    plain: true
  }));
  const users2 = userSumIndustry.map((user) => user.get({
    plain: true
  }));
  const users3 = userSumAll.map((user) => user.get({
    plain: true
  }));
  const users4 = userSumAll$.map((user) => user.get({
    plain: true
  }));
  const users5 = latestEntry.map((user) => user.get({
    plain: true
  }));

  const totals = users2.find(u => u.industry === users5[0].industry)

  const totalNumber = userData.length;

  const totalNumber2 = totals.length;

  console.log("total", totalNumber2)
  res.render('results', {
    users,
    users2,
    users3,
    users4,
    userSumAll,
    totalNumber,
    totalNumber2,
    users5,
    latestEntry,
    totals
  });
});


module.exports = router;