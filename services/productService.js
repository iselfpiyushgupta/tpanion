const InMemoryDb = require('../repositories/inMemoryDb');
const Product = require('../models/products');

class ProductService extends InMemoryDb {}

module.exports = new ProductService();
