import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import Product from '../models/Product.js';

const router = express.Router();



cloudinary.config({
  cloud_name: "dyh1rtfkk",
  api_key: "913468484939528",
  api_secret: "VvZ9TVny2-SVX3EstNgTL3lEwEQ"
});

const storage = new CloudinaryStorage({ cloudinary, params: { folder: 'products' } });
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    price: req.body.price,
    rating: req.body.rating,
    imageUrl: req.file.path 
  });
  await newProduct.save();
  res.status(201).json(newProduct);
});

export default router;