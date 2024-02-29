const express = require("express");
const router = express.Router();
const Seller = require("../../Models/Seller");

//get all sellers
router.get("/", async (req, res) => {
  try {
    const sellers = await Seller.query();
    if (sellers) {
      return res.status(200).json(sellers);
    } else {
      return res.status(204).json({ message: "No sellers!" });
    }
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
});
//get specific seller
router.get("/:id", async (req, res) => {
  const sellerID = req.params.id;
  try {
    const sellerInfo = await Seller.query().findById(sellerID);
    if (sellerInfo) {
      return res.status(200).json(sellerInfo);
    } else {
      return res.status(204).json({ message: "Seller not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
});
//create seller
router.post("/:id", async (req, res) => {
  try {
    await Seller.query().insert(req.body);
    return res.status(201).json({ message: "Created new seller" });
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
});
//replace existing seller info
router.put("/:id", async (req, res) => {
  const userID = req.params.id;
  try {
    const updatedSeller = await Seller.query().updateAndFetchById(
      userID,
      req.body
    );
    if (updatedSeller) {
      return res.status(200).json(updatedSeller);
    } else {
      return res.json({ message: "Seller not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
});
//update seller info
router.patch("/:id", async (req, res) => {
  const userID = req.params.id;
  try {
    const updatedSeller = await Seller.query().patchAndFetchById(
      userID,
      req.body
    );
    if (updatedSeller) {
      return res.status(200).json(updatedSeller);
    } else {
      return res.json({ message: "Seller not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
});

module.exports = router;
