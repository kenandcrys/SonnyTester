const express = require("express");
const router = express.Router();
const Review = require("../../Models/Review");

router.get("/:productId", async (req, res) => {
  const productId = req.params.productId
  const reviews = await Review.query().where('product_id', productId);

  res.status(200).json(reviews);
});

module.exports = router;
