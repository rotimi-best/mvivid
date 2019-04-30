const express = require('express');
const router = express.Router();
const { getUser, updateUser } = require('../db/methods/user');
const { getSkill } = require('../db/methods/skill');
const { addRecommendation, getRecommendation } = require('../db/methods/recommendation');

// @route GET api/people
// @desc Get all user
// @access Public
router.get('/', async (req, res) => {
  const users = await getUser({}, { createdAt: 'asc'});

  console.log('All users found', users);

  res.json({ users });
});

// @route GET api/people/:id
// @desc Get a user profile
// @access Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await getUser({ _id: id });
  const skills = user.skills;
  const recommendations = user.recommendations;

  user.skills = [];
  user.recommendations = [];
  user.contacts = user.contacts.length;

  // Get list of skills
  for (const skillId of skills) {
    const [skill] = await getSkill({ _id: skillId });

    user.skills.push(skill.name);
  }

  // Get all recommendations
  for (const recommendationId of recommendations) {
    const [recommendation] = await getRecommendation({ _id: recommendationId });

    user.recommendations.push(recommendation);
  }

  // TODO: Get savedjobs and appliedjobs object from collection

  console.log('Job found', user);

  res.json({ user });
});

// @route GET api/people/search
// @desc Search for people
// @access Public
// @example /search?query=vitali&city=odessa
router.get('/search', async (req, res) => {
  const { query = "", city = "" } = req.params;

  const people = await getUser({
    city: `/${city}/i`,
    $or: [
      { fullName: `/${query}/i` },
      { description: `/${query}/i` },
      { skills: `/${query}/i` }
    ]
  });

  console.log('People found', people);

  res.json({ people });
});

// @route PUT api/people
// @desc Update a profile
// @access Private
router.put('/', async (req, res) => {
  const update = req.body;

  await updateUser({ _id: update._id }, { ...update });

  console.log('Updating a User');

  res.json({ success: true });
});

// @route POST api/people/recommendation
// @desc Write a recommendation
// @access Private
router.post('/', async (req, res) => {
  const recommendation = req.body;

  await addRecommendation(recommendation);

  console.log('New recommendation added');

  res.json({ success: true });
});

// TODO: Route for Send contact request

module.exports = router;
