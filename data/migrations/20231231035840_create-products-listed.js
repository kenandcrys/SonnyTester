/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products_listed', function(table) {
    table.increments('id').primary();
    // Seller listing the product
    table
    .integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');
    // Product being listed
    table
    .integer('product_id')
    .unsigned()
    .references('id')
    .inTable('products')
    .onDelete('CASCADE');
    // Adding a unique constraint on user_id and product_id
    table.unique(['user_id', 'product_id']);
    // Adding default values for the created_at timestamp only
    table.timestamps(true, true).defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products_listed');
};
