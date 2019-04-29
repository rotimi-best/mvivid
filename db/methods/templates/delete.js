module.exports = (collectionModel, collectionName, findField) => {
  return new Promise(async (resolve, reject) => {
    console.log(`Deleting a document in ${collectionName} collection`);

    collectionModel.remove(findField,  (err, res) => {
      if (err) reject(`Error deleting a document in ${collectionName} ${err}`);

      resolve(res);
    });
  });
};
