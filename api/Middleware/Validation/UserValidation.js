const UserValidation =async (req, res, next) => {
    const role = req.body.role;
    if (role === 'buyer') {
     const BuyerValidation = require("./BuyerValidation");
       await  BuyerValidation(req,res,next);
    } else if (role === 'seller'){
        const SellerValidation = require("./SellerValidation");
        await  SellerValidation(req,res,next);
    }
    
  };

  module.exports = UserValidation;
 