const express = require("express");
const router = express.Router();
const Admin = require("../../Models/Admin");
const AdminValidation = require("../../Middleware/Validation/AdminValidation");

/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - role
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the admin .
 *         name:
 *           type: string
 *           description: The full name of the admin.
 *         email:
 *           type: string
 *           description: The email address of the admin.
 *         password:
 *           type: string
 *           description: The password associated with the admin's account.
 *         role:
 *           type: string
 *           description: The role of the user, should be set to "admin".
 *         phone:
 *           type: string
 *           description: The address of the buyer.
 *         profile_picture:
 *           type: string
 *           description: The profile_picture of the admin.       
 *       example:
 *         id: 22
 *         name: Alexander
 *         email: Alexander@gmail.com
 *         password: 123
 *         role: admin
 *         
 */ 

 /**
  * @swagger
  * tags:
  *   name: Admin
  *   description: The Buyers managing API
  */





/**
 * @swagger
 * /api/admin/{id}:
 *   get:
 *     summary: Get the admin by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The admin id
 *     responses:
 *       200:
 *         description: The admin description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       404:
 *         description: The admin was not found
 */
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


/**
 * @swagger
 * /api/admin/{id}:
 *  put:
 *    summary: Update the admin by the id
 *    tags: [Admin]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The admin id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Admin'
 *    responses:
 *      200:
 *        description: The admin was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Admin'
 *      404:
 *        description: The admin was not found
 *      500:
 *        description: Some error happened
 */


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
