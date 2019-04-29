module.exports = (collectionModel, collectionName, findField, setField) => {
  return new Promise((resolve, reject) => {
    console.log(`Updating a document in ${collectionName} collection`);

    collectionModel.updateOne(findField, { $set: setField }, (err, res) => {
      if (err) reject(`Error updating a ${collectionName} field ${err}`);

      resolve(res);
    });
  });
};