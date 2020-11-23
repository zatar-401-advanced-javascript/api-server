'use strict';
const categoryModel = require('../../lib/models/categories/categories.collection');
const productModel = require('../../lib/models/products/products.collection');
const todoModel = require('../../lib/models/todo/todo.collection');

module.exports = (req, res,next) => {
  const model = req.params.model;

  switch (model) {
  case 'categories':
    req.model = categoryModel;
    break;
  case 'products':
    req.model = productModel;
    break;
  case 'todo':
    req.model = todoModel;
    break;
  default:
    throw new Error('Invalid Model');
  }
  next();
};