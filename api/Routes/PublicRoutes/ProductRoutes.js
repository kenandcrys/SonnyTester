const express = require("express");
const router = express.Router();
const Product = require("../../Models/Product");

router.get("/", async (req, res) => {
  const product = await Product.query();
  res.status(200).json(product);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.query().findById(id);

  if (!product) {
    return res.status(404).json({
      message: "No product found with provided id",
    });
  }

  res.status(200).json(product);
});

module.exports = router;
