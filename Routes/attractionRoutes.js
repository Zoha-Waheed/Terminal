const express = require("express");
const router = express.Router();
const {
  createAttraction,
  getAttractions,
  getAttraction,
  updateAttraction,
  deleteAttraction,
} = require("../Controllers/attractionController.js");

router.route("/")
  .post(createAttraction)
  .get(getAttractions);

router.route("/:id")
  .get(getAttraction)
  .put(updateAttraction)
  .delete(deleteAttraction);

module.exports = router;
