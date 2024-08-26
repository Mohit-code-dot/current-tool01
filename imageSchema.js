const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
    imgPaths: [{ type: String }], // Array to store multiple image URLs
});
const ImageModel = mongoose.model("Image", imageSchema); // Capitalized model name
module.exports = ImageModel; 
 