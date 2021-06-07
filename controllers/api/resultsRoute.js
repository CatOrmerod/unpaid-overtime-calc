const express = require('express');
const { Entry } = require('../../models');


const { overtimeCalc } = require('../../utils/calc');
const router = express.Router();

router.get('/:email', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      // const entryData = await Entry.findOne(req.params.email, {});
    const entryData = await Entry.findOne({ where: { email: req.params.email } });
    console.log(entryData);
    const entry = entryData.get({ plain: true });
      const { X, Y, Z } = overtimeCalc(parseFloat(entry.start_time), parseFloat(entry.end_time), entry.had_lunch, entry.salary);
      res.render('results', {
        X, Y, Z,
      });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    
    }
});

module.exports = router;
