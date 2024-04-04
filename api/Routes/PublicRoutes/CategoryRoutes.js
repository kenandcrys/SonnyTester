const express = require("express");
const router = express.Router();
const Category = require("../../Models/Category");

// GET route to fetch all categories with their subcategories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.query().withGraphFetched('subcategories');
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
});

// GET route to fetch a specific category by ID with its subcategories
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.query().findById(id).withGraphFetched('subcategories');
    
    if (!category) {
      return res.status(404).json({ message: "No category found with provided id" });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error fetching category", error });
  }
});

module.exports = router;
