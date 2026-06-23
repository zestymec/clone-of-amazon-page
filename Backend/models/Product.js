import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  rating: Number,
  imageUrl: String
});

export default mongoose.model('Product', productSchema);