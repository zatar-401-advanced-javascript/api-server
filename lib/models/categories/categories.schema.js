const mongoose = require('mongoose');

const category = mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String, require: true },
  description: { type: String, require: true },
});

module.exports = mongoose.model('category', category);