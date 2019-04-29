module.exports = (collectionModel, collectionName, data) => {
  return new Promise((resolve, reject) => {
    console.log(`Creating a document in ${collectionName} collection`);

    if (Array.isArray(data) && data.length) {
      collectionModel.insertMany(data, (err, res) => {
        if (err) reject(`Error while creating in ${collectionName} collection: ${err}`);

        resolve(res);
      });
    } else {
      collectionModel.create(data, (err, res) => {
        if (err) reject(`Error while creating in ${collectionName} collection: ${err}`);

        resolve(res);
      });
    }
  });
};