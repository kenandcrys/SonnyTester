const express = require("express");
const router = express.Router();
const Subcategory = require("../../Models/Subcategory");

// GET route to populate products when invoked
router.get("/", async (req, res) => {
  const subcategory = await Subcategory.query();
  res.status(200).json(subcategory);
});
// GET route to populate a certain product by ID when invoked
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const subcategory = await Subcategory.query().findById(id);
  //error handling for product not found
  if (!subcategory) {
    return res.status(404).json({
      message: "No subcategory found with provided id",
    });
  }

  res.status(200).json(subcategory);
});

module.exports = router;