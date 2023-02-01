const mongoose = require("mongoose");

const approvedArtworkSchema = new mongoose.Schema({
  artwork: {
    type: Object,
    required: true,
  }
});

module.exports = ApprovedArtworkModel = mongoose.model(
  "ApprovedArtworks",
  approvedArtworkSchema
);
