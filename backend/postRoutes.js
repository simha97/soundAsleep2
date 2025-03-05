const express = require("express")
const database = require("./connect.js")
const {ObjectId} = require("mongodb")

let postRoutes = express.Router()

postRoutes.route("/:collectionName/posts").post(async (request, response) => {
  let db = database.getDb();
  const collectionName = request.params.collectionName

  let mongoObject = {
    day: request.body.day,
    relaxation: request.body.relaxation,
    mood: request.body.mood,
    selectedSound: request.body.selectedSound,
    timestamp: new Date(),
  };
  let data = await db
    .collection(collectionName)
    .insertOne(mongoObject)
  response.json(data)
});


module.exports = postRoutes;
