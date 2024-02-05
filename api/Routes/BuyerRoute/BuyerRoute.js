const express = require("express");
const router = express.Router();
const Buyer = require("../../Models/Buyer");
const BuyerValidation = require("../../Middleware/Validation/BuyerValidation");

/**
 * @swagger
 * components:
 *   schemas:
 *     Buyer:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - role
 *         - password
 *         - city
 *         - address
 *         - postal_code
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the buyer .
 *         name:
 *           type: string
 *           description: The full name of the buyer.
 *         email:
 *           type: string
 *           description: The email address of the buyer.
 *         password:
 *           type: string
 *           description: The password associated with the buyer's account.
 *         role:
 *           type: string
 *           description: The role of the user, should be set to "buyer".
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
 *       example:
 *         id: d5fE_asz
 *         name: Alexander
 *         email: Alexander@gmail.com
 *         password: 123
 *         role: buyer
 *         address: 456 Elm Street
 *         city: Springfield
 *         postal_code: 12345
 */ 

 /**
  * @swagger
  * tags:
  *   name: Buyers
  *   description: The Buyers managing API
  */

/**
 * @swagger
 * /api/buyers:
 *   get:
 *     summary: Returns the list of all the buyers
 *     tags: [Buyers]
 *     responses:
 *       200:
 *         description: The list of the buyers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Buyer'
 */

router.get("/", async (req, res) => {
    const order = await Buyer.query();
    res.status(200).json(order);
  });
  
/**
 * @swagger
 * /api/buyers/{id}:
 *   get:
 *     summary: Get the buyer by id
 *     tags: [Buyers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The buyer id
 *     responses:
 *       200:
 *         description: The buyer description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Buyer'
 *       404:
 *         description: The buyer was not found
 */

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


/**
 * @swagger
 * /api/buyers/{id}:
 *  put:
 *    summary: Update the buyer by the id
 *    tags: [Buyers]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The buyer id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Buyer'
 *    responses:
 *      200:
 *        description: The buyer was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Buyer'
 *      404:
 *        description: The buyer was not found
 *      500:
 *        description: Some error happened
 */


router.put("/:id", BuyerValidation, async (req, res) => {
  const id = req.params.id;
  const buyer = await Buyer.query().patchAndFetchById(id, req.body);

  if (!buyer) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(buyer);
});


/**
 * @swagger
 * /api/buyers/{id}:
 *   delete:
 *     summary: Remove the buyer by id
 *     tags: [Buyers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The buyer id
 * 
 *     responses:
 *       200:
 *         description: The buyer was deleted
 *       404:
 *         description: The buyer was not found
 */


router.delete("/:id", async (req, res) => {
    const id = req.params.id;
  
    const result = await Buyer.query().deleteById(id);
  
    if (!result) {
      return res.status(404).json({
        message: "ID not found",
      });
    }
  
    res.status(202).json({
      message: "buyer has been deleted."
    });
  });
  
module.exports = router;