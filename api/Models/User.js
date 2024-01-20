const { Model } = require("objection");

class User extends Model {

  static get tableName() {
    return "users";
  }

  static  get relationMappings () {
    const Product = require("./Product");

   return {
    products: {
      relation: Model.HasManyRelation,
      modelClass: Product,
      join: {
        from: 'users.id',
        to: 'products.user_id'
      }
    }
   }
  };

}





module.exports = User;