
const ProductModel = require('../../Models/NewProduct/Product');

const ValidateNewProduct = async (req, res, next) => {
  // Check if a product with the same name already exists
  const { name, category, description, price } = req.body;

  const existingProduct = await ProductModel.getByName(name);
 
  if (existingProduct) {
    res.status(400).json({
      message: `Product name ${name} already exists.`
    })
  } else if (!name) {
    res.status(400).json({
      message: 'Please enter a name',
    })
  }else if (!category) {
    res.status(400).json({
      message: 'Please enter a category',
    })
  }else if (!description) {
    res.status(400).json({
      message: 'Please enter a description',
    })
  }else if (!price) {
    res.status(400).json({
      message: 'Please enter a price',
    })
  } else {
    next()
  }

};

module.exports = ValidateNewProduct;
