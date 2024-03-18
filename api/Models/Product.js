const { Model } = require("objection");

class Product extends Model {
  static get tableName() {
    return "products";
  }

  // This is an example of the relation but User Model is not created yet
  static get relationMappings() {
    const User = require("./User");
    const Review = require("./Review");
    const Order = require("./Order");
    const Category = require("./Category");

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
      },
      orders: {
        relation: Model.ManyToManyRelation,
        modelClass: Order,
        join: {
          from: 'products.id',
          through: {
            from: 'ordered_products.product_id',
            to: 'ordered_products.order_id'
          },
          to: 'orders.id'
        }
      },
      category: { // Define a new relation for category
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: "products.category_id", // Assuming 'category_id' is the foreign key in 'products' table
          to: "categories.id",
        },
      },
    };
  }

}

module.exports = Product;
