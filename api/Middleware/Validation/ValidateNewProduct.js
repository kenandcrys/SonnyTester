
const ValidateNewProduct = (type, name, description, price) => {
    
    if ( !type ) {
        return {
            isValid: false, 
            message: "Please enter a category type."
        }
    };

    if ( !name || typeof name !== 'string' ) {
        return {
            isValid: false, 
            message: "Please enter a valid product name."
        }
    };

    if ( !description || description.lentgh < 10 || description.length > 256) {

        return {
            isValid: false, 
            message: "Please enter a valid description with more than 10  and less than 256 characters."
        }
    }

    if ( !price || typeof price !== 'number' || price <= 0 ) {

        return {
            isValid: false, 
            message: "Please enter a valid price."
        }
    }

    return {
        isValid: true,
        message: 'Product accepted',
    };
};

module.exports = ValidateNewProduct;