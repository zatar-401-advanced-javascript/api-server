'use strict';

const productModel = require('./products.schema');
const collection = require('../collection');

class Product extends collection {
  constructor() {
    super(productModel);
  }
}

module.exports = new Product();