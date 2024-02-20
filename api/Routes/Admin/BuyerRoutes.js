const express = require("express");
const router = express.Router();
const Buyer = require("../../Models/Buyer");
const BuyerValidation = require("../../Middleware/Validation/BuyerValidation");

router.get("/", async (req, res) => {
  const buyer = await Buyer.query();
  res.status(200).json(buyer);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const buyer = await Buyer.query().findById(id);
  if (!buyer) {
    return res.status(404).json({
      message: "No buyer found with provided id",
    });
  }
  
  res.status(200).json(buyer);
});

router.put(
  "/:id",
  BuyerValidation,
  async (req, res) => {
    const id = req.params.id;
    const buyer = await Buyer.query().patchAndFetchById(id, req.body);

    if (!buyer) {
      return res.status(404).json({
        message: "ID not found",
      });
    }

    res.status(200).json(buyer);
  }
);

router.delete(
  "/:id",
  async (req, res) => {
    const id = req.params.id;

    const result = await Buyer.query().deleteById(id);

    if (!result) {
      return res.status(404).json({
        message: "ID not found",
      });
    }

    res.status(202).json({
      message: "buyer has been deleted.",
    });
  }
);

module.exports = router;
