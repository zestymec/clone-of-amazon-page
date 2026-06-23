const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const Product = require('../models/Product');


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({ cloudinary, params: { folder: 'products' } });
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    price: req.body.price,
    rating: req.body.rating,
    imageUrl: req.file.path // Yeh Cloudinary ka URL hai
  });
  await newProduct.save();
  res.status(201).json(newProduct);
});

module.exports = router;