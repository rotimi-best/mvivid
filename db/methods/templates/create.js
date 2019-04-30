module.exports = (collectionModel, collectionName, data) => {
  return new Promise((resolve, reject) => {
    console.log(`Creating a document in ${collectionName} collection`);

    collectionModel.create(data, (err, res) => {
      if (err) reject(`Error while creating in ${collectionName} collection: ${err}`);

      resolve(res);
    });
  });
};