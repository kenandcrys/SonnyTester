const express = require('express');
const router = express.Router()

// Public routers
const ProductRoutes = require('./ProductRoutes');
const ReviewRoutes = require('./ReviewRoutes');
const CategoryRoutes = require('./CategoryRoutes');
const SubcategoryRoutes = require('./SubcategoryRoutes');

router.use('/products', ProductRoutes)
router.use('/reviews', ReviewRoutes)
router.use('./categories', CategoryRoutes)
router.use('./subcategories', SubcategoryRoutes)

module.exports = router