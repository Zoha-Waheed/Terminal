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

// Add a new route for top-rated attractions
router.route("/top-rated")
  .get(async (req, res) => {
    try {
      // Sort attractions by rating in descending order and limit to 5
      const topAttractions = await Attraction.find()
        .sort({ rating: -1 })  // Sort by highest rating
        .limit(5);  // Get the top 5 attractions
      res.status(200).json(topAttractions);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;
