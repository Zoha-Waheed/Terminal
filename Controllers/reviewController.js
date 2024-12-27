const Review = require("../Models/reviewModel.js");
const Visitor = require("../Models/visitorModel.js");
const Attraction = require("../Models/attractionModel.js");

exports.createReview = async (req, res) => {
  const { attraction, visitor, score, comment } = req.body;

  try {
    // Validate Attraction ID
    const attractionExists = await Attraction.findById(attraction);
    if (!attractionExists) {
      return res.status(404).json({ error: "Attraction not found" });
    }

    // Validate Visitor ID
    const visitorExists = await Visitor.findById(visitor);
    if (!visitorExists) {
      return res.status(404).json({ error: "Visitor not found" });
    }

    // Check if the visitor has visited the attraction
    if (!visitorExists.visitedAttractions.includes(attraction)) {
      return res
        .status(400)
        .json({ error: "Visitor has not visited this attraction" });
    }

    // Ensure the visitor has not already reviewed this attraction
    const existingReview = await Review.findOne({ attraction, visitor });
    if (existingReview) {
      return res
        .status(400)
        .json({ error: "Visitor has already reviewed this attraction" });
    }

    // Create and save the review
    const review = new Review({ attraction, visitor, score, comment });
    const savedReview = await review.save();

    res.status(201).json(savedReview);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("attraction visitor");
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate("attraction visitor");
    if (!review) return res.status(404).json({ error: "Not found" });
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
