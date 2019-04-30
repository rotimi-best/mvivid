const express = require('express');
const router = express.Router();
const { addForumQuestion, getForumQuestion, updateForumQuestion } = require('../db/methods/forumQuestion');
const { addForumAnswer, getForumAnswer } = require('../db/methods/forumAnswer');
const { getUser } = require('../db/methods/user');

// @route GET api/forums/questions
// @desc Get all questions 
// @access Public
router.get('/questions', async (req, res) => {
  const questions = await getForumQuestion({}, { createdAt: 'asc'});

  console.log('Total number of questions found', questions);

  res.json({ questions });
});

// @route GET api/forums/question/:id
// @desc Get one question
// @access Public
router.get('/question/:id', async (req, res) => {
  const { id } = req.params;

  // Find the question
  let [question] = await getForumQuestion({ _id: id });
  console.log('Question found: ', question);

  if (question) {
    // Get the question author
    const [askedBy] = await getUser({ _id: question.askedBy });
    console.log('Question author: ', askedBy);
    question.askedBy = { id: askedBy._id, name: askedBy.fullName };

    // Get the answers
    if (question.answers.length) {
      const answers = await getForumAnswer({ forumQuestionId: id });
      console.log('All answer: ', answers);

      // Get answer authors
      for (const answer of answers) {
        const [answeredBy] = await getUser({ _id: answer.answeredBy });
        answer.answeredBy = { id: answeredBy._id, name: answeredBy.fullName };

        console.log('Answer author: ', answer.answeredBy);

        question.answers.push(answer);
      }
    }
  }

  console.log('Question object: ', question);

  res.json({ question });
});

// @route GET api/forums/search
// @desc Search for questions
// @access Public
// @example /search?query=node
router.get('/search', async (req, res) => {
  const { query = "" } = req.params;

  const forumQuestions = await getForumQuestion({ 
    $or: [
      { title: `/${query}/i` },
      { question: `/${query}/i` },
      { tags: `/${query}/i` }
    ]
  });

  console.log('Forum Questions found', forumQuestions);

  res.json({ forumQuestions });
});

// @route POST api/forums/question
// @desc Add a question
// @access Private
router.post('/question', async (req, res) => {
  const newQuestion = req.body;

  await addForumQuestion(newQuestion);

  console.log('New question added');

  res.json({ success: true });
});

// @route POST api/forums/answer
// @desc Answer a question
// @access Private
router.post('/answer', async (req, res) => {
  const answer = req.body;

  // Insert the answer
  const { _id } = await addForumAnswer(answer);

  // update question collection with answerId
  await updateForumQuestion(
    { _id: answer.forumQuestionId },
    { $push: { answers: _id } }  
  );

  console.log('New Answer added');

  res.json({ success: true });
});

module.exports = router;
