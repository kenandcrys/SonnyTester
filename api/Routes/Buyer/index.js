const express = require('express');
const router = express.Router()

// Admin routers
const OrderRoutes = require('./OrderRoutes');
const ProfileRoutes = require('./ProfileRoutes');
const ReviewRoutes = require('./ReviewRoutes');

router.use('/orders', OrderRoutes)
router.use('/reviews', ReviewRoutes)
router.use('/profile', ProfileRoutes)

module.exports = router