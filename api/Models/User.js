const { Model } = require("objection");

class User extends Model {

  static get tableName() {
    return "users";
  }

  static  get relationMappings () {
 
   return {
    products: {
      relation: Model.HasManyRelation,
      modelClass: require("./Product"),
      join: {
        from: 'users.id',
        to: 'products.user_id'
      }
    },
    reviews: {
      relation: Model.HasManyRelation,
      modelClass: require('./Review'),
      join: {
        from: 'users.id',
        to: 'reviews.user_id'
      }
    },
    orders: {
      relation: Model.HasManyRelation,
      modelClass: require("./Order"),
      join: {
        from: 'users.id',
        to: 'orders.user_id'
      }
    }
   }
  };

}





module.exports = User;