'use strict';
// ---------------------------------------------------------------------------
// Dependencies
const express = require('express');
require('dotenv').config();
const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/500');
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const app = express();
// ---------------------------------------------------------------------------
// Middleware
app.use(express.json());
app.use(timestamp);
app.use(logger);
// ---------------------------------------------------------------------------
// Memory db
let db_categories = [];
let db_products = [];
// ---------------------------------------------------------------------------
// Routes
app.get('/categories',allCategories);
app.get('/categories/:id',getCategory);
app.post('/categories', addCategory);
app.put('/categories/:id', updateCategory);
app.patch('/categories/:id', updateCategory);
app.delete('/categories/:id', deleteCategory);

app.get('/products',allProducts);
app.get('/products/:id',getProducts);
app.post('/products', addProducts);
app.put('/products/:id', updateProducts);
app.patch('/products/:id', updateProducts);
app.delete('/products/:id', deleteProducts);

app.get('/bad', (req, res) => {
  throw new Error('a 505 test error');
});
// ---------------------------------------------------------------------------
// Functions
function allCategories(req,res){
  const count = db_categories.length;
  const result = db_categories;

  res.status(200).json({count, result});
}

function getCategory(req,res){
  const id = req.params.id;
  const result = db_categories.filter((record) => record.id == id);

  res.status(200).json(result[0]);
}

function addCategory(req,res){
  const {name,display_name,description} = req.body;
  const result = {name,display_name,description};
  result.id = db_categories.length + 1;
  db_categories.push(result);

  res.status(201).json(result);
}

function updateCategory(req,res){
  const id = req.params.id;
  const {name,display_name,description} = req.body;
  const result = {id,name,display_name,description};

  db_categories[id-1] = result;
  res.status(202).json(result);
}

function deleteCategory(req,res){
  const id = req.params.id-1;
  delete db_categories[id];

  res.status(202).json({});
}

function allProducts(req,res){
  const count = db_products.length;
  const result = db_products;

  res.status(200).json({count, result});
}

function getProducts(req,res){
  const id = req.params.id;
  const result = db_products.filter((record) => record.id == id);

  res.status(200).json(result[0]);
}

function addProducts(req,res){
  const {category,name,display_name,description} = req.body;
  const result = {category,name,display_name,description};
  result.id = db_products.length + 1;
  db_products.push(result);

  res.status(201).json(result);
}

function updateProducts(req,res){
  const id = req.params.id;
  const {category,name,display_name,description} = req.body;
  const result = {id,category,name,display_name,description};

  db_products[id-1] = result;
  res.status(202).json(result);
}

function deleteProducts(req,res){
  const id = req.params.id-1;

  delete db_products[id];
  res.status(202).json({});
}
// ---------------------------------------------------------------------------
// Handlers
app.use('*', notFoundHandler);
app.use(errorHandler);
// ---------------------------------------------------------------------------

module.exports = {
  server: app,
  start: (port)=>{
    port = process.env.PORT || port;
    app.listen(port, ()=>{
      console.log(`up and running on ${port}`); 
    });
  },
};