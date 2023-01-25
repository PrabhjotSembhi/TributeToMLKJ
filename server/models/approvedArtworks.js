const mongoose = require("mongoose");

const approvedArtworkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  qoute: {
    type: String,
  },
  imgUrl: String,
  email: {
    type: String,
    required: true,
  },
});

module.exports = ApprovedArtworkModel = mongoose.model(
  "ApprovedArtworks",
  approvedArtworkSchema
);
