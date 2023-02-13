const mongoose = require('mongoose');

const imgSchema = new mongoose.Schema({
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


module.exports = ImageModel = mongoose.model("Image", imgSchema);
