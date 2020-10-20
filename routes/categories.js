'use strict';
const express = require('express');
const router = express.Router();
const categoryModel = require('../lib/models/categories/categories.collection');


router.get('/', allCategories);
router.get('/:id', getCategory);
router.post('', addCategory);
router.put('/:id', updateCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);

async function allCategories(req, res) {
  const result = await categoryModel.read();
  const count = result.length;

  res.status(200).json({ count, result });
}

async function getCategory(req, res) {
  const id = req.params.id;
  const result = await categoryModel.read(id);

  res.status(200).json(result);
}

function addCategory(req, res) {
  categoryModel.create(req.body).then((data) =>{
    res.status(201).json(data);
  });
}

function updateCategory(req, res) {
  const id = req.params.id;
  categoryModel.update(id,req.body).then((data) =>{
    res.status(202).json(data);
  });
}

function deleteCategory(req, res) {
  const id = req.params.id;
  categoryModel.delete(id).then(() =>{
    res.status(202).json({});
  });
}

module.exports = router;
