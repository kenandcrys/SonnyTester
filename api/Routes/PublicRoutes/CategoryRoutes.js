const express = require("express");
const router = express.Router();
const Category = require("../../Models/Category");

// GET route to populate products when invoked
router.get("/", async (req, res) => {
  const category = await Category.query();
  res.status(200).json(product);
});
// GET route to populate a certain product by ID when invoked
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const category = await Category.query().findById(id);
  //error handling for product not found
  if (!category) {
    return res.status(404).json({
      message: "No category found with provided id",
    });
  }

  res.status(200).json(category);
});

module.exports = router;