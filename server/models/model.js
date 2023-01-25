const mongoose = require('mongoose');

const imgSchema = new mongoose.Schema({
    name: String,
    imgUrl: String
})

module.exports = ImageModel = mongoose.model("Image", imgSchema);
