const { Model } = require("objection");

class Seller extends Model {
  static get tableName() {
    return "users";
  }

  static query(...args) {
    return super.query(...args).where("role", "seller");
  }

  static get relationMappings() {
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: require("./Product"),
        join: {
          from: "users.id",
          to: "products.user_id",
        },
      },

      //   The customers model hasn't been created yet
      //   customers: {
      //     relation: Model.HasManyRelation,
      //     modelClass: require("./Customer"),
      //     join: {
      //       from: "users.id",
      //       to: "customers.seller_id",
      //     },
      //   },
    };
  }
}

module.exports = Seller;
