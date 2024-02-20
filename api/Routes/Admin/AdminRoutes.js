const express = require("express");
const router = express.Router();
const Admin = require("../../Models/Admin");
const AdminValidation = require("../../Middleware/Validation/AdminValidation");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const admin = await Admin.query()
    .findById(id)
    .select(["id", "name", "profile_picture", "email", "phone", "role"]);

  if (!admin) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(admin);
});

router.put("/:id", AdminValidation, async (req, res) => {
  const id = req.params.id;
  const admin = await Admin.query()
    .findOne("id", id)
    .patch(req.body)
    .returning(["id", "name", "profile_picture", "email", "phone", "role"]);

  if (!admin) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(admin);
});

module.exports = router;
