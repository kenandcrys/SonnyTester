/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('returned_products', function(table) {
    // Composite primary key
    table.primary(['order_id', 'product_id']);
    // Order the product is from
    table
      .integer('order_id')
      .unsigned()
      .references('id')
      .inTable('orders')
      .onDelete('CASCADE');
    // Product that was returned
    table
      .integer('product_id')
      .unsigned()
      .references('id')
      .inTable('products')
      .onDelete('CASCADE');
    // Quantity being returned
    table.integer('quantity').notNullable();
    //Date returned
    table.date('date_received');
    table.text('return_condition').notNullable();
    table.boolean('is_eligible_for_resale').defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('returned_products');
};
