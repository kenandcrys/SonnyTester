const express = require("express");
const router = express.Router();
const Product = require("../../Models/Product");
const ProductValidation = require("../../Middleware/Validation/ProductValidation");


/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - user_id
 *         - name
 *         - description
 *         - category
 *         - status
 *         - price
 *         - stock_quantity
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the order .
 *         user_id:
 *           type: string
 *           description: The ID of the user associated with the product.
 *         name:
 *           type: string
 *           description: The name of the product.
 *         description:
 *           type: string
 *           description: The description of the product.
 *         category:
 *           type: integer
 *           description: The ID of the category to which the product belongs.
 *         status:
 *           type: string
 *           description: The status of the product (e.g., "available", "out of stock").
 *         price:
 *           type: number
 *           format: double
 *           description: The price of the product.
 *         stock_quantity:
 *           type: integer
 *           description: The quantity of the product in stock.
 *         images:
 *           type: object
 *           description: JSON object representing images of the product.
 *       example:
 *         id: 15
 *         user_id: 4
 *         name: "Product A"
 *         description: "A high-quality product."
 *         category: 1
 *         status: "available"
 *         price: 29.99
 *         stock_quantity: 50
 */ 


 /**
  * @swagger
  * tags:
  *   name: Products
  *   description: The Products managing API
  */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

router.get("/", async (req, res) => {
  const product = await Product.query();
  res.status(200).json(product);
});

 
/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: The product was not found
 */

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.query().findById(id);

  if (!product) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(product);
});


/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    summary: Update the product by the id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: The product was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: The product was not found
 *      500:
 *        description: Some error happened
 */



router.put("/:id", ProductValidation, async (req, res) => {
  const id = req.params.id;
  const product = await Product.query().patchAndFetchById(id, req.body);

  if (!product) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(product);
});


/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */

router.post("/", ProductValidation, async (req, res) => {
  const product = await Product.query().insert(req.body).returning("*");

  res.status(201).json(product);
});


/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Remove the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 * 
 *     responses:
 *       200:
 *         description: The product was deleted
 *       404:
 *         description: The product was not found
 */


router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await Product.query().deleteById(id);

  if (!result) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(202).json({
    message: "Product has been deleted.",
  });
});

module.exports = router;
