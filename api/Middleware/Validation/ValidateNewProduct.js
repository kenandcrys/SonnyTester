
const ProductModel = require('../../Models/NewProduct/Product');

const ValidateNewProduct = async (req, res, next) => {
  // Check if a product with the same name already exists
  const { name } = req.body;

  const existingProduct = await ProductModel.getByName(name);
 
  if (existingProduct) {
    res.status(400).json({
      message: `Product name ${name} already exists.`
    })
  } else {
    next();
  }

};

module.exports = ValidateNewProduct;
