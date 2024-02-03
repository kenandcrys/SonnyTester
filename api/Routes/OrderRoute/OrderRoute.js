const express = require("express");
const router = express.Router();
const Order = require("../../Models/Order");
const OrderValidation = require("../../Middleware/Validation/OrderValidation");

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - user_id
 *         - delivery_fee
 *         - total_price
 *         - billing_address_id
 *         - delivery_address_id
 *         - payment_method_id
 *         - status
 *         - date_shipped
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the order .
 *         user_id:
 *           type: string
 *           description: The ID of the user placing the order .
 *         delivery_fee:
 *           type: number
 *           format: double
 *           description: The delivery fee for the order.
 *         total_price:
 *           type: number
 *           format: double
 *           description: The total price of the order..
 *         billing_address_id:
 *           type: integer
 *           description: The ID of the billing address associated with the order.
 *         delivery_address_id:
 *           type: integer
 *           description: The ID of the delivery address where the order should be shipped.
 *         payment_method_id:
 *           type: integer
 *           description: The ID of the payment method used for the order..
 *         status:
 *           type: string
 *           description: The current status of the order (e.g., "pending", "shipped", "delivered").
 *         date_shipped:
 *           type: date
 *           description: The date when the order was shipped.
 *       example:
 *         id: 15
 *         user_id: 4
 *         delivery_fee: 5.99
 *         total_price: 29.99
 *         billing_address_id: 6
 *         delivery_address_id: 10
 *         payment_method_id: 7
 *         status: "shipped"
 *         date_shipped: "2024-02-03"
 */ 


 /**
  * @swagger
  * tags:
  *   name: Orders
  *   description: The Orders managing API
  */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Returns the list of all the orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: The list of the orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */

router.get("/", async (req, res) => {
    const order = await Order.query();
    res.status(200).json(order);
  });
  
 
/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get the order by id
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The order id
 *     responses:
 *       200:
 *         description: The order description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: The order was not found
 */


router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const order = await Order.query().findById(id);

  if (!order) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(order);
});

/**
 * @swagger
 * /api/orders/{id}:
 *  put:
 *    summary: Update the order by the id
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The order id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Order'
 *    responses:
 *      200:
 *        description: The order was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Order'
 *      404:
 *        description: The order was not found
 *      500:
 *        description: Some error happened
 */




router.put("/:id", OrderValidation, async (req, res) => {
  const id = req.params.id;
  const order = await Order.query().patchAndFetchById(id, req.body);

  if (!review) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(order);
});

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: The order was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       500:
 *         description: Some server error
 */
router.post("/", OrderValidation, async (req, res) => {
  const order = await Order.query().insert(req.body).returning("*");

  res.status(201).json(order);
});


/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: Remove the order by id
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The order id
 * 
 *     responses:
 *       200:
 *         description: The order was deleted
 *       404:
 *         description: The order was not found
 */


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
