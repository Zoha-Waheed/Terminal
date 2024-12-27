const Visitor = require("../Models/visitorModel.js");

exports.createVisitor = async (req, res) => {
  try {
    const visitor = new Visitor(req.body);
    const savedVisitor = await visitor.save();
    res.status(201).json(savedVisitor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.status(200).json(visitors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.findById(req.params.id).populate("visitedAttractions");
    if (!visitor) return res.status(404).json({ error: "Not found" });
    res.status(200).json(visitor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateVisitor = async (req, res) => {
  try {
    const updatedVisitor = await Visitor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedVisitor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteVisitor = async (req, res) => {
  try {
    await Visitor.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
