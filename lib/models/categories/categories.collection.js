'use strict';

const categoryModel = require('./categories.schema');
const collection = require('../collection');

class Category extends collection {
  constructor() {
    super(categoryModel);
  }
}

module.exports = new Category();