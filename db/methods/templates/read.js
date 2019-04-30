module.exports = (collectionModel, collectionName, findParams, sortParams = null, limitNo = null) => {
  return new Promise((resolve, reject) => {
    console.log(`Reading a document from ${collectionName} collection`);
    const options = {};

    if (sortParams) {
      options.sort = sortParams;
    }

    if (limitNo) {
      options.limit = limitNo;
    }

    collectionModel.find(findParams, null, options, (err, result) => {
      if (err) reject(`Error while reading ${collectionName} collection ${err}`);

      resolve(result);
    });
  });
};