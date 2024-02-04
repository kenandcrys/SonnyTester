/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('saved_products', function(table) {
    table.increments('id').primary();
    // Buyer who saved the product
    table
    .string('buyer_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');
    // Product being saved
    table
    .integer('product_id')
    .unsigned()
    .references('id')
    .inTable('products')
    .onDelete('CASCADE');
    //Seller who listed the product
    table
    .string('seller_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');
    // Adding a unique constraint on buyer_id and product_id
    table.unique(['buyer_id', 'product_id']);
    table.date('date_saved');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('saved_products');
};
