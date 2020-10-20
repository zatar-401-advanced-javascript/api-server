'use strict';
const server = require('./lib/server');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI ||  'mongodb://localhost:27017/class-08';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>{
  server.start(3000);
}).catch((err) =>{
  console.error(err.message);
});