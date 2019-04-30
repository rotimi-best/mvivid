const ForumQuestionModel = require('../models/ForumQuestion');
const { DB: { COLLECTIONS : { FORUM_QUESTION } } } = require('../../helpers/constants');

module.exports = {
  addForumQuestion: data => require('./templates/create')(ForumQuestionModel, FORUM_QUESTION, data),
  getForumQuestion: (findFields = {}, sortFields = null, limitNo = null) => {
    return require('./templates/read')(ForumQuestionModel, FORUM_QUESTION, findFields, sortFields, limitNo);
  },
  updateForumQuestion: (findField, setField) => require('./templates/update')(ForumQuestionModel, FORUM_QUESTION, findField, setField),
  deleteForumQuestion: findField => require('./templates/delete')(ForumQuestionModel, FORUM_QUESTION, findField)
};
