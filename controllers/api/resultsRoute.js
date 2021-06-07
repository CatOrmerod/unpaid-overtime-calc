const express = require('express');
const router = express.Router();

router.get('/results/:email', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const entryData = await Entry.findByPk(req.params.email, {});
  
      const entry = entryData.get({ plain: true });
      const X, Y, Z
      overtimeCalc(entry.start, entry.end, entry.lunch, entry.salary);
      res.render('results', {
        X, Y, Z,
      });

    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
