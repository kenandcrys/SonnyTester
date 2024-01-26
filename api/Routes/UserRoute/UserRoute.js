const express = require("express");
const router = express.Router();
const User = require("../../Models/User");

// returns a user information

router.get("/:id", async (req, res) => {
  const userID = req.params.id;
  try {
    const userDetail = await User.query().findById(userID);
    if (userDetail) {
      return res.status(200).json({
        userDetail,
      });
    } else {
      return res.status(400).json({
        message: "User not found!",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
});

//creates new user

router.post("/", async (req, res) => {
  try {
    await User.query().insert(req.body);
    return res.status(201).json({ message: "Created new user" });
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
});

// replaces user info

router.put("/:id", async (req, res) => {
  const userID = req.params.id;
  try {
    const updatedUser = await User.query().updateAndFetchById(userID, req.body);
    if (updatedUser) {
      return res.status(200).json(updatedUser);
    } else {
      return res.status(400).json({
        message: "User not found!",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
});

//update user info
router.patch("/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const patchedUser = await User.query().patchAndFetchById(userID, req.body);
    if (patchedUser) {
      return res.status(200).json(patchedUser);
    } else {
      return res.status(400).json({
        message: "User not found!",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
});

module.exports = router;
