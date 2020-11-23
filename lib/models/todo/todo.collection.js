'use strict';

const todoModel = require('./todo.schema');
const collection = require('../mongo');

class Todo extends collection {
  constructor() {
    super(todoModel);
  }
}

module.exports = new Todo();