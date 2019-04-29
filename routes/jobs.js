const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const jobs = [
    {name: 'CEO of Microsoft', applicants: 20},
    {name: 'Backup muscisian', applicants: 50},
    {name: 'Medical Doctor', applicants: 40},
  ];

  res.json({ jobs });
});

module.exports = router;
