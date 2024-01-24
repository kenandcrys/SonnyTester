const express = require("express");
const router = express.Router();
const Review = require("../../Models/Review");
const ReviewValidation = require("../../Middleware/Validation/ReviewValidation");



router.get("/", async (req, res) => {
    const review = await Review.query();
    res.status(200).json(review);
  });
  



router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const review = await Review.query().findById(id);

  if (!review) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(review);
});


router.put("/:id", ReviewValidation, async (req, res) => {
  const id = req.params.id;
  const review = await Review.query().patchAndFetchById(id, req.body);

  if (!review) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(review);
});


router.post("/", ReviewValidation, async (req, res) => {
  const review = await Review.query().insert(req.body).returning("*");

  res.status(201).json(review);
});



router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await Review.query().deleteById(id);

  if (!result) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(202).json({
    message: "Review has been deleted.",
  });
});


module.exports = router;
