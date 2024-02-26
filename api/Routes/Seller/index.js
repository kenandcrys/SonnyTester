const express = require('express');
const router = express.Router()

// Admin routers
const ProfileRoutes = require('./ProfileRoutes');
const ProductRoutes = require('./ProductRoutes');

router.use('/profile', ProfileRoutes)
router.use('/products', ProductRoutes)

module.exports = router