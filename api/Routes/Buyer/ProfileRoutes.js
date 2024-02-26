const express = require("express");
const router = express.Router();
const Buyer = require("../../Models/Buyer");
const BuyerValidation = require("../../Middleware/Validation/BuyerValidation");

router.get("/", async (req, res) => {
  const buyer = await Buyer.query().findById(req.user.uid); // If the authentication is not working then req.user.uid is going to be undefined
  if (!buyer) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(buyer);
});

router.put("/", BuyerValidation, async (req, res) => {
  const id = req.user.uid; // If the authentication is not working then req.user.uid is going to be undefined
  const buyer = await Buyer.query().patchAndFetchById(id, req.body);

  if (!buyer) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(buyer);
});

router.delete("/", async (req, res) => {
  const id = req.user.uid; // If the authentication is not working then req.user.uid is going to be undefined
  const result = await Buyer.query().deleteById(id);

  if (!result) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(202).json({
    message: "buyer has been deleted.",
  });
});

module.exports = router;
