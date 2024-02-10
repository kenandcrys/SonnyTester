const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../../Models/User");
const admin = require('../../firebase-config');
const UserValidation = require('../../Middleware/Validation/UserValidation');
const AuthenticationMiddleware = require("../../Middleware/AuthenticationMiddleware");

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: The Authentication managing API
 */
/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Log out the user.
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description:  Successful logout.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/logout", AuthenticationMiddleware, async (req, res) => {

  await admin.auth().revokeRefreshTokens(req.uid);
  res.json({ message: 'Logout successful' });

});

/**
 * @swagger
 * /SignUp:
 *   post:
 *     summary: User Registration
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */

router.post("/signup", UserValidation, async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
      disabled: false,
      emailVerified: false
    });


    await admin.auth().setCustomUserClaims(userRecord.uid, { role: `${req.body.role}` });
    req.body.id = userRecord.uid;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    await User.query().insert(req.body);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to register user." });
  }

})

/**
* Function to get user by email and password using Firebase Authentication
* @param {string} email - User email
* @param {string} password - User password
* @returns {Object|null} - User object or null if not found or invalid password
*/
async function getUserByEmail(email, password) {
  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    const user = {
      uid: userRecord.uid,
      email: userRecord.email,
    };

    const isValidPassword = bcrypt.compare(password, userRecord.passwordHash);
    if (!isValidPassword) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    return null;
  }
}

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User Login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 token:
 *                   type: string
 *                   description: JWT token
 *       400:
 *         description: Invalid email or password
 *       500:
 *         description: Some server error
 */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email, password);
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    const loggedinUser = await User.query().findById(user.uid).select(["id", "name", "profile_picture", "email", "phone", "role", "address", "address_line_2", "address_line_3", "city", "postal_code", "business_name", "business_address", "business_address_line_2", "business_address_line_3", "business_city", "business_postal_code", "biz_cert_number_ein", "verification_images"]);
    if (!loggedinUser) {
      return res.status(404).json({
        message: "user not found.",
      });
    }
    
    const expiresIn = 60 * 60 * 24; // 24 hours
    const validToken = await admin.auth().createCustomToken(user.uid, { role: loggedinUser.role, expiresIn });

    res.status(200).json({ message: 'User logged in successfully', user: loggedinUser, validToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to log in user.' });
  }
});




/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Retrieve user profile information.
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description:  Successful retrieval of user profile.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get('/profile', AuthenticationMiddleware, async (req, res) => {
  const id = req.uid;
  const user = await User.query().findById(id).select(["id", "name", "profile_picture", "email", "phone", "role", "address", "address_line_2", "address_line_3", "city", "postal_code", "business_name", "business_address", "business_address_line_2", "business_address_line_3", "business_city", "business_postal_code", "biz_cert_number_ein", "verification_images"]);
  if (!user) {
    return res.status(404).json({
      message: "not found.",
    });
  }
  res.status(200).json(user);
});



module.exports = router;
