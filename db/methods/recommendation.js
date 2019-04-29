const RecommendationModel = require('../models/Recommendation');
const { DB: { COLLECTIONS : { RECOMMENDATION } } } = require('../../helpers/constants');

module.exports = {
  addRecommendation: data => require('./templates/create')(RecommendationModel, RECOMMENDATION, data),
  getRecommendation: (findFields, sortFields = null) => {
    return require('./templates/read')(RecommendationModel, RECOMMENDATION, findFields, sortFields);
  },
  updateRecommendation: (findField, setField) => require('./templates/update')(RecommendationModel, RECOMMENDATION, findField, setField),
  deleteRecommendation: findField => require('./templates/delete')(RecommendationModel, RECOMMENDATION, findField)
};
