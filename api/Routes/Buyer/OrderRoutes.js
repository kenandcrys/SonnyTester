const express = require("express");
const router = express.Router();
const Order = require("../../Models/Order");
const OrderValidation = require("../../Middleware/Validation/OrderValidation");

router.get("/", async (req, res) => {
  const order = await Order.query().where('user_id', req.user.uid); // If the authentication is not working then req.user.uid is going to be undefined

  res.status(200).json(order);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const order = await Order.query().findById(id);

  if (!order) {
    return res.status(404).json({
      message: "No order found with provided id",
    });
  }

  res.status(200).json(order);
});

router.put("/:id", OrderValidation, async (req, res) => {
  const id = req.params.id;
  const order = await Order.query().patchAndFetchById(id, req.body);
  if (!order) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(order);
});

router.post("/", OrderValidation, async (req, res) => {
  const userId = req.user.uid // If the authentication is not working then req.user.uid is going to be undefined
  req.body.user_id = userId
  const order = await Order.query().insert(req.body).returning("*");

  res.status(201).json(order);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await Order.query().deleteById(id);

  if (!result) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(202).json({
    message: "order has been deleted.",
  });
});

module.exports = router;
