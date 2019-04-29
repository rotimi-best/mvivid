module.exports = (collectionModel, collectionName, findParams, sortParams) => {
  return new Promise((resolve, reject) => {
    console.log(`Reading a document from ${collectionName} collection`);

    if (sortParams) {
      collectionModel.find(findParams)
        .sort(sortParams)
        .exec((err, result) => {
          if (err) reject(`Error while reading ${collectionName} collection ${err}`);

          resolve(result);
        });
    } else {
      collectionModel.find(findParams, (err, result) => {
        if (err) reject(`Error while reading ${collectionName} collection ${err}`);

        resolve(result);
      });
    }
  });
};