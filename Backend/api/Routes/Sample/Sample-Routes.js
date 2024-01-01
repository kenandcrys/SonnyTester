// DO NOT CHANGE THIS FILE
const express = require("express");
const router = express.Router();
const sm = require("../../Models/Sample/Sample-model");

router.get("/", async (_req, res, next) => {
  try {
    const equine = await sm.getAll();
    res.status(200).json(equine);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const cattleById = await sm.getById(id);

    if (cattleById) {
      res.status(200).json(cattleById);
    } else {
      res.json({
        status: 404,
        message: "Id not found",
      });
    }
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const { name, description, pricePerBag, pricePer20, pricePer40, url } =
      req.body;

    const result = await sm.updateById(id, {
      name,
      description,
      pricePerBag,
      pricePer20,
      pricePer40,
      url,
    });

    res.status(200).json(req.body);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { name, description, pricePerBag, pricePer20, pricePer40, url } =
    req.body;
  const newResourceId = await sm.create(
    name,
    description,
    pricePerBag,
    pricePer20,
    pricePer40,
    url
  );
  try {
    if (!name || !pricePerBag || !pricePer20 || !pricePer40 || !url) {
      return res.status(400).json({ error: "Missing required data" });
    } else {
      res.status(201).json(req.body);
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await sm.deleteById(id);

    if (result > 0) {
      res.json({
        status: 204,
        message: "Delete Success",
      });
    } else {
      res.json({
        status: 404,
        message: "Item not found",
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
