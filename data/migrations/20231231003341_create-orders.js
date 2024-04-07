/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('orders').then((exists) => {
      if (!exists) {
        return knex.schema.createTable('orders', function(table) {
          table.increments('id').primary();
          // User who placed the order
          table
            .string('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
          // Shipping fee
          table.decimal('delivery_fee', 10, 2).notNullable();
          // Total price of the order
          table.decimal('total_price', 10, 2).notNullable();
          // Billing address
          table
            .integer('billing_address_id')
            .unsigned()
            .references('id')
            .inTable('payment_methods')
            .onDelete('SET NULL');
          // Delivery address
          table
            .integer('delivery_address_id')
            .unsigned()
            .references('id')
            .inTable('delivery_addresses')
            .onDelete('SET NULL');
          // Payment method used for the order
          table
            .integer('payment_method_id')
            .unsigned()
            .references('id')
            .inTable('payment_methods')
            .onDelete('SET NULL');
          // Order status (e.g., 'pending', 'shipped', 'delivered')
          table.string('status').notNullable();
          // Date order has shipped
          table.date('date_shipped').notNullable();
          // Adding default values for the created_at timestamp only
          table.timestamps(true, true);
        });
      }
    });
  };
  
  
  /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
  exports.down = function(knex) {
    // Check if the 'coupons' table exists before attempting to drop the foreign key constraint
    return knex.schema.hasTable('coupons').then((exists) => {
      if (exists) {
        return knex.schema.table('coupons', function(table) {
          table.dropForeign('order_id');
        })
        // Drop the 'coupons' table
        .then(() => knex.schema.dropTableIfExists('coupons'))
        // Drop the 'orders' table
        .then(() => knex.schema.dropTableIfExists('orders'));
      }
    });
  };