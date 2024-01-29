const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }

  static fromDatabaseJson(json) {
    if (json.role == "buyer") {
      const Buyer = require("./Buyer");
      return Model.fromDatabaseJson.call(Buyer, json);
    }

    if (json.role == "admin") {
      const Admin = require("./Admin");
      return Model.fromDatabaseJson.call(Admin, json);
    }
  }

  // static  get relationMappings () {

  //  return {
  //   products: {
  //     relation: Model.HasManyRelation,
  //     modelClass: require("./Product"),
  //     join: {
  //       from: 'users.id',
  //       to: 'products.user_id'
  //     }
  //   },
  //   reviews: {
  //     relation: Model.HasManyRelation,
  //     modelClass: require('./Review'),
  //     join: {
  //       from: 'users.id',
  //       to: 'reviews.user_id'
  //     }
  //   },
  //   orders: {
  //     relation: Model.HasManyRelation,
  //     modelClass: require("./Order"),
  //     join: {
  //       from: 'users.id',
  //       to: 'orders.user_id'
  //     }
  //   }
  //  }
  // };
}

module.exports = User;
