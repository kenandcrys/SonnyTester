const { Model } = require("objection");

class Product extends Model {
  static get tableName() {
    return "products";
  }

  // This is an example of the relation but User Model is not created yet
  static get relationMappings() {
    const User = require("./User");
    const Review= require("./Review");

    return {
      seller: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "products.user_id",
          to: "users.id",
        },
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: 'products.id',
          to: 'reviews.product_id'
        }
      }
    };
  }

}

module.exports = Product;
