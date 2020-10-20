const express = require('express');
const router = express.Router();
const productModel = require('../lib/models/products/products.collection');

router.get('/', allProducts);
router.get('/:id', getProducts);
router.post('/', addProducts);
router.put('/:id', updateProducts);
router.patch('/:id', updateProducts);
router.delete('/:id', deleteProducts);

async function allProducts(req, res) {
  const result = await productModel.read();
  const count = result.length;

  res.status(200).json({ count, result });
}

async function getProducts(req, res) {
  const id = req.params.id;
  const result = await productModel.read(id);

  res.status(200).json(result);
}

function addProducts(req, res) {
  productModel.create(req.body).then((data)=>{
    res.status(201).json(data);
  });

}

function updateProducts(req, res) {
  const id = req.params.id;
  productModel.update(id,req.body).then((data)=>{
    res.status(202).json(data);
  });
}

function deleteProducts(req, res) {
  const id = req.params.id;
  productModel.delete(id).then(() =>{
    res.status(202).json({});
  });
}

module.exports = router;