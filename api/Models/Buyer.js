const { Model } = require("objection");

class Buyer extends Model {

  static get tableName() {
    return "users";
  }

  static query(...args) {
    return super.query(...args).where('role', 'buyer');
 }
 

  static  get relationMappings () {
 
   return {
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


module.exports = Buyer;
