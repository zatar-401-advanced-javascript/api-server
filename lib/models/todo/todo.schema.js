const mongoose = require('mongoose');

const todo = mongoose.Schema({
  complete: { type: Boolean, default: false },
  text: { type: String },
  display_name: { type: Number },
  assignee: { type: String },
});

module.exports = mongoose.model('task', todo);