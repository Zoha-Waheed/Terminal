const Attraction = require("../Models/attractionModel.js"); 

exports.createAttraction = async (req, res) => {
  try {
    const attraction = new Attraction(req.body);
    const savedAttraction = await attraction.save();
    res.status(201).json(savedAttraction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find();
    res.status(200).json(attractions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAttraction = async (req, res) => {
  try {
    const attraction = await Attraction.findById(req.params.id);
    if (!attraction) return res.status(404).json({ error: "Not found" });
    res.status(200).json(attraction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAttraction = async (req, res) => {
  try {
    const updatedAttraction = await Attraction.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedAttraction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAttraction = async (req, res) => {
  try {
    await Attraction.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
