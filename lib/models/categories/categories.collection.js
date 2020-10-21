'use strict';

const categoryModel = require('./categories.schema');
const collection = require('../mongo');

class Category extends collection {
  constructor() {
    super(categoryModel);
  }
}

module.exports = new Category();