'use strict';
const express = require('express');
const router = express.Router();
const getModel = require('../lib/middleware/getModel');

router.param('model', getModel);

// router.get('/', details);
router.get('/:model', getAllHandle);
router.get('/:model/:id', getHandle);
router.post('/:model', addHandle);
router.put('/:model/:id', updateHandle);
router.patch('/:model/:id', updateHandle);
router.delete('/:model/:id', deleteHandle);

async function getAllHandle(req, res) {
  const result = await req.model.read();
  const count = result.length;

  res.status(200).json({ count, result });
}

async function getHandle(req, res) {
  const id = req.params.id;
  const result = await req.model.read(id);

  res.status(200).json(result);
}

function addHandle(req, res) {
  req.model.create(req.body).then((data) => {
    res.status(201).json(data);
  });
}

function updateHandle(req, res) {
  const id = req.params.id;
  req.model.update(id, req.body).then((data) => {
    res.status(202).json(data);
  });
}

function deleteHandle(req, res) {
  const id = req.params.id;
  req.model.delete(id).then(() => {
    res.status(202).json({});
  });
}

// function details(req,res){
//   res.status(200).json({'models':'categories and products'});
// }

module.exports = router;
