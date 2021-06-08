const express = require('express');
const { Entry } = require('../models');
const sequelize = require('../config/connection');

const router = express.Router();

   router.get('/', async (req, res) => {
          const userSum = await Entry.findAll({
  attributes: ['industry', [sequelize.fn('sum', sequelize.col('unpaid_hours')), 'total_unpaid_hours']],
  group: ['industry']
})
    const userData = await Entry.findAll().catch((err) => { 
        res.json(err);
      });
        const users = userData.map((user) => user.get({ plain: true }));
        const users2 = userSum.map((user) => user.get({ plain: true }));
        
        
        console.log(users, users2)
        res.render('results', { users, users2 });
      });






module.exports = router;
