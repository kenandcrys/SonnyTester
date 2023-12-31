
const ProductModel = require('../../Models/NewProduct/Product'); // Replace with the actual path to your Product model

const ValidateNewProduct = async (type, name, description, price) => {
  // Check if a product with the same name already exists
  const existingProduct = await ProductModel.getByName(name);

  if (existingProduct) {
    return {
      isValid: false,
      message: `Product with name "${name}" already exists.`,
    };
  }

  if (!type) {
    return {
      isValid: false,
      message: 'Please enter a category type.',
    };
  }

  if (!name || typeof name !== 'string') {
    return {
      isValid: false,
      message: 'Please enter a valid product name.',
    };
  }

  if (!description || description.length < 10 || description.length > 256) {
    return {
      isValid: false,
      message: 'Please enter a valid description with more than 10 and less than 256 characters.',
    };
  }

  if (!price || typeof price !== 'number' || price <= 0) {
    return {
      isValid: false,
      message: 'Please enter a valid price.',
    };
  }

  return {
    isValid: true,
    message: 'Product Created',
  };
};

module.exports = ValidateNewProduct;
