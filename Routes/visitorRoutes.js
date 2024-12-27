const express = require("express");
const router = express.Router();
const {
  createVisitor,
  getVisitors,
  getVisitor,
  updateVisitor,
  deleteVisitor,
} = require("../Controllers/visitorController.js");
const Visitor = require("../Models/visitorModel.js");
const Review = require("../Models/reviewModel.js");

router.route("/")
  .post(createVisitor)
  .get(getVisitors);

router.route("/:id")
  .get(getVisitor)
  .put(updateVisitor)
  .delete(deleteVisitor);

// Add a new route for visitors' activity (count of attractions reviewed)
router.route("/activity")
  .get(async (req, res) => {
    try {
      // Aggregate visitor data and count the number of reviews they have done
      const visitorsWithActivity = await Visitor.aggregate([
        {
          $lookup: {
            from: "reviews", // Reference to the 'reviews' collection
            localField: "_id",
            foreignField: "visitor",
            as: "reviews",
          },
        },
        {
          $project: {
            name: 1, // Include visitor name
            email: 1, // Include visitor email
            reviewsCount: { $size: "$reviews" }, // Count the number of reviews
          },
        },
      ]);

      res.status(200).json(visitorsWithActivity);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;
