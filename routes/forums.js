const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const forums = [
    {name: 'Christian group', participants: 20},
    {name: 'Muslim group', participants: 50},
    {name: 'Budahism group', participants: 40},
  ];

  res.json({ forums });
});

module.exports = router;
