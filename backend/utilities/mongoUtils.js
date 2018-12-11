exports.find = (collection, queryObj) => new Promise((resolve, reject) => {
  console.log("insode find");
  console.log(queryObj);
  collection.find(queryObj, (err, docs) => {
    if (err) {
      reject(err);
    } else {
      resolve(docs);
    }
  });
});

exports.deleteField = (collection, queryObj) => new Promise((resolve, reject) => {
  console.log(queryObj);
  console.log("inside mongo utils ");
  collection.findOneAndUpdate({_id: queryObj.id}, {$pull: {videos: {_id: queryObj.videoId}}}, {new: true}, (err, docs) => {
    if (err) {
      reject(err);
    } else {
      console.log(docs);
      resolve(docs);
    }
  });
});
