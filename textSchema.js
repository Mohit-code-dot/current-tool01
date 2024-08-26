const mongoose = require("mongoose");
const BrandSchema = new mongoose.Schema({
    imgPaths: [{ type: String }],
    title: String,
    bulletPoint01: String,
    bulletPoint02: String,
    bulletPoint03: String,
    bulletPoint04: String,
    bulletPoint05: String,
    bulletPoint06: String,
    price: String,
    brandName: String,
    itemForm: String,
    manufacture: String,
    quantity: Number,
    PackageInfo: String,
  });
  
  const TextModel = new mongoose.model("BrandStore", BrandSchema);

  module.exports = TextModel;