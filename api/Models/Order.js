const { Model } = require("objection");

class Order extends Model {
  static get tableName() {
    return "orders";
  }

  static get relationMappings() {

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("./User"),
        join: {
          from: "orders.user_id",
          to: "users.id",
        },
      },

      products: {
        relation: Model.ManyToManyRelation,
        modelClass: require('./Product'),
        join: {
          from: 'orders.id',
          through: {
            from: 'ordered_products.order_id',
            to: 'ordered_products.product_id'
          },
          to: 'products.id'
        }
      },

      // voucher table is not created yet && order-voucher 

      // vouchers: {
      //   relation: Model.ManyToManyRelation,
      //   modelClass: require('./Voucher'),
      //   join: {
      //     from: 'orders.id',
      //     through: {
      //       from: 'ordered_vouchers.order_id',
      //       to: 'ordered_vouchers.voucher_id'
      //     },
      //     to: 'vouchers.id'
      //   }
      // },


      
    };
  }

}

module.exports = Order;
