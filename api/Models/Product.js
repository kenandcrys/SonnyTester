const { Model } = require("objection");

class Product extends Model {
  static get tableName() {
    return "products";
  }

  // This is an example of the relation but User Model is not created yet
  static get relationMappings() {
    

    return {
      seller: {
        relation: Model.BelongsToOneRelation,
        modelClass:require("./User"),
        join: {
          from: "products.user_id",
          to: "users.id",
        },
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: require("./Review"),
        join: {
          from: 'products.id',
          to: 'reviews.product_id'
        }
      },
      orders: {
        relation: Model.ManyToManyRelation,
        modelClass: require('./Order'),
        join: {
          from: 'products.id',
          through: {
            from: 'ordered_products.product_id',
            to: 'ordered_products.order_id'
          },
          to: 'orders.id'
        }
      }
    };
  }

}

module.exports = Product;
