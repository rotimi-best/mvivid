const SkillModel = require('../models/Skill');
const { DB: { COLLECTIONS : { SKILL } } } = require('../../helpers/constants');

module.exports = {
  addSkill: data => require('./templates/create')(SkillModel, SKILL, data),
  getSkill: (findFields, sortFields = null) => {
    return require('./templates/read')(SkillModel, SKILL, findFields, sortFields);
  },
  updateSkill: (findField, setField) => require('./templates/update')(SkillModel, SKILL, findField, setField),
  deleteSkill: findField => require('./templates/delete')(SkillModel, SKILL, findField)
};
