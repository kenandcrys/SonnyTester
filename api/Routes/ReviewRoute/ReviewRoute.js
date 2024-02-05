const express = require("express");
const router = express.Router();
const Review = require("../../Models/Review");
const ReviewValidation = require("../../Middleware/Validation/ReviewValidation");



/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - product_id
 *         - user_id
 *         - rating
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the review .
 *         product_id:
 *           type: integer
 *           description: The ID of the product associated with the review.
 *         user_id:
 *           type: string
 *           description: The ID of the user who submitted the review.
 *         description:
 *           type: string
 *           description:  The text description of the review.
 *         rating:
 *           type: integer
 *           description: The rating given to the product in the review (1 to 5).
 *       example:
 *         id: 1
 *         product_id: 2
 *         user_id: "4"
 *         description: "This product exceeded my expectations!"
 *         rating: 5
 */ 


 /**
  * @swagger
  * tags:
  *   name: Reviews
  *   description: The reviews managing API
  */

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Returns the list of all the reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: The list of the reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */

router.get("/", async (req, res) => {
    const review = await Review.query();
    res.status(200).json(review);
  });
  
/**
 * @swagger
 * /api/reviews/{id}:
 *   get:
 *     summary: Get the review by id
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The review id
 *     responses:
 *       200:
 *         description: The review description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: The review was not found
 */

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const review = await Review.query().findById(id);

  if (!review) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(review);
});


/**
 * @swagger
 * /api/reviews/{id}:
 *  put:
 *    summary: Update the review by the id
 *    tags: [Reviews]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The review id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Review'
 *    responses:
 *      200:
 *        description: The review was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Review'
 *      404:
 *        description: The review was not found
 *      500:
 *        description: Some error happened
 */


router.put("/:id", ReviewValidation, async (req, res) => {
  const id = req.params.id;
  const review = await Review.query().patchAndFetchById(id, req.body);

  if (!review) {
    return res.status(404).json({
      message: "ID not found",
    });
  }

  res.status(200).json(review);
});


/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       200:
 *         description: The review was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       500:
 *         description: Some server error
 */

router.post("/", ReviewValidation, async (req, res) => {
  const review = await Review.query().insert(req.body).returning("*");

  res.status(201).json(review);
});


/**
 * @swagger
 * /api/reviews/{id}:
 *   delete:
 *     summary: Remove the review by id
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The review id
 * 
 *     responses:
 *       200:
 *         description: The review was deleted
 *       404:
 *         description: The review was not found
 */



router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await Review.query().deleteById(id);

  if (!result) {
    return res.status(404).json({
      message: "No review found with provided id",
    });
  }

  res.status(202).json({
    message: "Review has been deleted.",
  });
});


module.exports = router;
