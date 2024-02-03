const express = require("express");
const router = express.Router();
const User = require("../../Models/User");


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - role
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user .
 *         name:
 *           type: string
 *           description: The full name of the user.
 *         email:
 *           type: string
 *           description: The email address of the user.
 *         password:
 *           type: string
 *           description: The password associated with the user's account.
 *         role:
 *           type: string
 *           description: The role of the user, should be  seller or buyer or admin.
 *         address:
 *           type: string
 *           description: The address of the buyer.
 *         address_line_2:
 *           type: string
 *           description: Additional address details, if any, for the buyer.
 *         address_line_3:
 *           type: string
 *           description: Additional address details, if any, for the buyer.
 *         city:
 *           type: string
 *           description: The city where the buyer is located.
 *         postal_code:
 *           type: string
 *           description: The postal code associated with the buyer's address.
 *         business_name:
 *           type: string
 *           description: The name of the business.   
 *         business_address:
 *           type: string
 *           description: The primary address of the business.   
 *         business_address_line_2:
 *           type: string
 *           description: Additional address information for the business.
 *         business_address_line_3:
 *           type: string
 *           description: Further details for the business address.
 *         business_city:
 *           type: string
 *           description: The city associated with the business address.
 *         business_postal_code:
 *           type: string
 *           description: The postal code or ZIP code of the business address.
 *         verification_images:
 *           type: object
 *           description: JSON object representing  images for business verification.
 *       example:
 *         id: 5
 *         name: Alexander
 *         email: Alexander@gmail.com
 *         password: 123
 *         role: buyer
 *         address: 456 Elm Street
 *         city: Springfield
 *         postal_code: "12345"
 *         business_name: "ABC Corporation"
 *         business_address: "789 Main Street"
 *         business_city: "Springfield"
 *         business_postal_code: "67890"
 */ 
 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: The users managing API
  */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get("/", async (req, res) => {
  const users = await User.query();
  res.status(200).json(users);
});

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 */

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.query().findById(id);
  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }
  res.status(200).json(user);
});

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [  Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 * 
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */


router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await User.query().deleteById(id);

  if (!result) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  res.status(202).json({
    message: "user has been deleted."
  });
});

module.exports = router;
