const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/tourismManagement", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
});
mongoose.connection.on("connected", () => console.log("Connected to MongoDB"));


// Import Routes
const attractionRoutes = require("./Routes/attractionRoutes.js");
const visitorRoutes = require("./Routes/visitorRoutes.js");
const reviewRoutes = require("./Routes/reviewRoutes.js");

// Use Routes
app.use("/api/attractions", attractionRoutes);
app.use("/api/visitors", visitorRoutes);
app.use("/api/reviews", reviewRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
