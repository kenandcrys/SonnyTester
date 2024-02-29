const express = require("express");
const router = express.Router();
const Seller = require("../../Models/Seller");
const SellerValidation = require("../../Middleware/Validation/SellerValidation");

router.get("/", async (req, res) => {
  const seller = await Seller.query().findById(req.user.uid);
  if (!seller) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(seller);
});

router.put("/", SellerValidation, async (req, res) => {
  const id = req.user.uid;
  const seller = await Seller.query().patchAndFetchById(id, req.body);

  if (!seller) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(seller);
});

router.delete("/", async (req, res) => {
  const id = req.user.uid;
  const result = await Seller.query().deleteById(id);

  if (!result) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(202).json({
    message: "seller has been deleted.",
  });
});

module.exports = router;
