const express = require("express");
const router = express.Router();
const Product = require('../../Models/NewProduct/Product');
const ValidateNewProduct = require("../../Middleware/Validation/ValidateNewProduct");

router.get('/', async (_req, res, next) => {

    try {
        const product = await Product.getAll()
        res.status(200).json(product)
    } catch (err) {
        next(err)
    }
});

router.get('/:id', async (req, res, next) => {

    try {
     const id = req.params.id
     const product = await Product.getById(id)
     if (product){
        res.status(200).json(product)
     } else {
        res.json({
            status: 404,
            message: "ID not found"
        })
     }
    } catch (err){
        next(err)
    }
});

router.get('/:name', async (req, res, next) => {

    try {
     const name = req.params.name
     const product = await Product.getByName(name)
     if (product){
        res.status(200).json(product)
     } else {
        res.json({
            status: 404,
            message: "Name not found"
        })
     }
    } catch (err){
        next(err)
    }
});

router.put("/:name", async (req, res, next) => {
    try {
    const productName = req.params.name;

    const { type, name, description, price } =
        req.body;

    const result = await Product.updateByName(productName, {
        type,
        name,
        description,
        price,
    });

    res.status(200).json(req.body);
    } catch (err) {
    next(err);
    }
});

router.post("/",ValidateNewProduct, async (req, res, next) => {
    const { category, name, description, price } =
      req.body;
    const newProductId = await Product.create(
        category,
        name,
        description,
        price,
    );
    
    try {
        res.status(201).json({
            productId: newProductId,
            product: req.body,
            message: 'New product created successfully'
        })
    } catch (err) {
        next(err)
    }
    
  });

  router.delete("/:name", async (req, res, next) => {
    try {
      const name = req.body.name;
  
      const result = await Product.deleteByName(name);
  
      if (result) {
        res.json({
          status: 204,
          message: "Product has been deleted.",
        });
      } else {
        res.json({
          status: 404,
          message: "Item not found",
        });
      }
    } catch (err) {
      next(err);
    }
  });

  module.exports = router
