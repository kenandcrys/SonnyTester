const express = require("express");
const router = express.Router();
const Subcategory = require("../../Models/Subcategory");

// GET route to fetch all subcategories with their products
router.get("/", async (req, res) => {
  try {
    const subcategories = await Subcategory.query().withGraphFetched('products');
    res.status(200).json(subcategories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subcategories", error });
  }
});

// GET route to fetch a specific subcategory by ID with its products
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const subcategory = await Subcategory.query().findById(id).withGraphFetched('products');
    
    if (!subcategory) {
      return res.status(404).json({ message: "No subcategory found with provided id" });
    }

    res.status(200).json(subcategory);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subcategory", error });
  }
});

module.exports = router;
