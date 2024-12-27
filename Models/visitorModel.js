const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+\@.+\..+/, "Invalid email format"],
  },
  visitedAttractions: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Attraction",
    default: [],
  },
});

module.exports = mongoose.model("Visitor", visitorSchema);
