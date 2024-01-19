const express = require("express");
const router = express.Router();
const Product = require("../../Models/Product");
const ProductValidation = require("../../Middleware/Validation/ProductValidation");

router.get("/", async (req, res) => {
  const product = await Product.query();

  res.status(200).json(product);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.query().findById(id);

  if (!product) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(product);
});

router.put("/:id", ProductValidation, async (req, res) => {
  const id = req.params.id;
  const product = await Product.query().patchAndFetchById(id, req.body);

  if (!product) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(product);
});

router.post("/", ProductValidation, async (req, res) => {
  const product = await Product.query().insert(req.body).returning("*");

  res.status(201).json(product);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await Product.query().deleteById(id);

  if (!result) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(202).json({
    message: "Product has been deleted.",
  });
});

module.exports = router;
