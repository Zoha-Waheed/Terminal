const express = require("express");
const router = express.Router();
const {
  createVisitor,
  getVisitors,
  getVisitor,
  updateVisitor,
  deleteVisitor,
} = require("../Controllers/visitorController.js");

router.route("/")
  .post(createVisitor)
  .get(getVisitors);

router.route("/:id")
  .get(getVisitor)
  .put(updateVisitor)
  .delete(deleteVisitor);

module.exports = router;
