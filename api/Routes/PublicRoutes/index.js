const express = require('express');
const router = express.Router()

// Admin routers
const ProductRoutes = require('./ProductRoutes');
const ReviewRoutes = require('./ReviewRoutes');

router.use('/products', ProductRoutes)
router.use('/reviews', ReviewRoutes)

module.exports = router