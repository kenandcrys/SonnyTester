/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('coupons_applied', function(table) {
    table.increments('id').primary();
    // Order to which the coupon is applied
    table
    .integer('order_id')
    .unsigned()
    .references('id')
    .inTable('orders')
    .onDelete('CASCADE');
    // Coupon associated with the order
    table
    .integer('coupon_id')
    .unsigned()
    .references('id')
    .inTable('coupons')
    .onDelete('CASCADE');
    // User who applied the coupon
    table
    .integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');
    // Discount amount applied to the order
    table.decimal('discount_amount', 10, 2).notNullable();
    table.date('date_applied');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('applied_coupons');
};
