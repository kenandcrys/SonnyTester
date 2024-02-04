const express = require("express");
const bcrypt=require("bcrypt");
const router = express.Router();
const User = require("../../Models/User");
const admin=require('../../firebase-config');
const UserValidation=require('../../Middleware/Validation/UserValidation');
const AuthenticationMiddleware=require("../../Middleware/AuthenticationMiddleware");

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
router.get("/logout",AuthenticationMiddleware,async (req, res) => {
 
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
router.post("/signup",UserValidation,async(req,res) => {
    try {
      const { email, password } = req.body;
      const userRecord = await admin.auth().createUser({
        email:email,
        password:password,
        disabled: false,
        emailVerified:false
      }); 
     await admin.auth().setCustomUserClaims(userRecord.uid, {role : `${req.body.role}`,}); 
     req.body.id=userRecord.uid;
     const salt=await bcrypt.genSalt(10);
     req.body.password= await bcrypt.hash(password,salt);
     await User.query().insert(req.body);
    res.json({ message:"User registered successfully"});
      
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Failed to register user.'});
    } 
  
  })



// router.post('/login',async (req, res) => {
    
//   });



module.exports = router;