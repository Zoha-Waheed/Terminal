const express = require("express");
const router = express.Router();
const {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
} = require("../Controllers/reviewController.js");

router.route("/")
  .post(createReview) // Add review with validations
  .get(getReviews);

router.route("/:id")
  .get(getReview)
  .put(updateReview)
  .delete(deleteReview);

module.exports = router;
