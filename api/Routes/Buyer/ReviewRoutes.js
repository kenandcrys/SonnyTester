const express = require("express");
const router = express.Router();
const Review = require("../../Models/Review");
const ReviewValidation = require("../../Middleware/Validation/ReviewValidation");
// PUT route to update a review when invoked.
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
// POST route to create a review when logged in
router.post("/", ReviewValidation, async (req, res) => {
  const userId = req.user.uid // If the authentication is not working then req.user.uid is going to be undefined
  req.body.user_id = userId
  const review = await Review.query().insert(req.body).returning("*");

  res.status(201).json(review);
});
/// DELETE route to delete a review by ID when logged in
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const review = await Review.query().findById(id);
  if (!review) {
    return res.status(404).json({
      message: "No review found with provided id",
    });
  }

  await Review.query().deleteById(id);
  res.status(202).json({ message: "Review has been deleted." });
});

module.exports = router;
