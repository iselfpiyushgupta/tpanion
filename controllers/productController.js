const express = require('express');
const productService = require('../services/productService');
const Product = require('../models/products');

const router = express.Router();

router.post('/createProduct', (req, res) => {
  const { name, description, price } = req.body;
  const product = new Product(name, description, price);
  productService.create(product);
  res.status(201).json(product);
});

router.get('/', (req, res) => {
  res.json(productService.getAll());
});

router.get('/:id', (req, res) => {
  const product = productService.findById(req.params.id);
  if (product) res.json(product);
  else res.status(404).send('Product not found');
});

router.delete('/:id', (req, res) => {
  productService.deleteById(req.params.id);
  res.status(204).send();
});

module.exports = router;
