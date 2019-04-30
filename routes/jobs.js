const express = require('express');
const router = express.Router();
const { addJob, getJob, updateJob, deleteJob } = require('../db/methods/job');
const { updateUser } = require('../db/methods/user');
const { getJobApplicant } = require('../db/methods/jobApplicant');

// @route GET api/jobs
// @desc Get all jobs
// @access Public
router.get('/', async (req, res) => {
  const jobs = await getJob({}, { createdAt: 'asc'});

  console.log('Total number of jobs found', jobs);

  res.json({ jobs });
});

// @route POST api/jobs
// @desc Add a new job
// @access Private
router.post('/', async (req, res) => {
  const newJob = req.body;

  await addJob(newJob);

  console.log('New job added');

  res.json({ success: true });
});

// @route PUT api/jobs
// @desc Update a job
// @access Private
router.put('/', async (req, res) => {
  const update = req.body;

  await updateJob({ _id: update._id }, { ...update });

  console.log('Updating a job');

  res.json({ success: true });
});

// @route DELETE api/jobs
// @desc Delete a job
// @access Private
router.delete('/', async (req, res) => {
  const { id } = req.body;

  await deleteJob({ _id: id });

  console.log('Deleting a job');

  res.json({ success: true });
});

// @route GET api/jobs/search
// @desc Search for jobs
// @access Public
// @example /search?title=nodejs&city=odessa
router.get('/search', async (req, res) => {
  const { title = "", city = "" } = req.params;

  const job = await getJob({ 
    title: `/${title}/i`,
    city: `/${city}/i`
  });

  console.log('Job found', job);

  res.json({ job });
});

// @route GET api/jobs/id
// @desc Get a particular job
// @access Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const job = await getJob({ _id: id });

  console.log('Job found', job);
  
  res.json({ job });
});

// @route GET api/jobs/id/applicants
// @desc Get applicants to a job
// @access Public
router.get('/:id/applicants', async (req, res) => {
  const { id } = req.params;

  const jobApplicants = await getJobApplicant({ jobId: id });

  console.log('Applicants found', jobApplicants);

  res.json({ jobApplicants });
});

// @route POST api/jobs/save
// @desc Bookmark a job
// @access Private
router.post('/save', async (req, res) => {
  const { userId, jobId } = req.body;

  await updateUser({ _id: userId }, { $push: { savedJobs: jobId }});

  console.log('Bookmarked a job for a user');

  res.json({ success: true });
});

// @route POST api/jobs/apply
// @desc Bookmark a job
// @access Private
router.post('/save', async (req, res) => {
  const { userId, jobId } = req.body;

  // TODO: Implement the application logic

  res.json({ success: true });
});

module.exports = router;
