const ForumAnswerModel = require('../models/ForumAnswer');
const { DB: { COLLECTIONS : { FORUM_ANSWER } } } = require('../../helpers/constants');

module.exports = {
  addForumAnswer: data => require('./templates/create')(ForumAnswerModel, FORUM_ANSWER, data),
  getForumAnswer: (findFields, sortFields = null) => {
    return require('./templates/read')(ForumAnswerModel, FORUM_ANSWER, findFields, sortFields);
  },
  updateForumAnswer: (findField, setField) => require('./templates/update')(ForumAnswerModel, FORUM_ANSWER, findField, setField),
  deleteForumAnswer: findField => require('./templates/delete')(ForumAnswerModel, FORUM_ANSWER, findField)
};
