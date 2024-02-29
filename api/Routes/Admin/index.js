const express = require('express');
const router = express.Router()

// Admin routers
const OrderRoutes = require('./OrderRoutes');
const BuyerRoutes = require('./BuyerRoutes');
const SellerRoutes = require('./SellerRoutes');
const ProductRoutes = require('./ProductRoutes');
const AdminRoutes = require('./AdminRoutes');

router.use('/orders', OrderRoutes)
router.use('/buyers', BuyerRoutes)
router.use('/sellers', SellerRoutes)
router.use('/products', ProductRoutes)
router.use('/admins', AdminRoutes)

module.exports = router