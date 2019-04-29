const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const people = [
    {name: 'Bill Gates', contacts: 20},
    {name: 'Travis Greene', contacts: 50},
    {name: 'Faith Ibitoye', contacts: 40},
  ];

  res.json({ people });
});

module.exports = router;
