const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  rating: Number,
  imageUrl: String
});

module.exports = mongoose.model('Product', productSchema);