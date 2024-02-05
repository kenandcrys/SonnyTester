/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('reviews', function (table) {
    table.increments('id').primary();
    table
    .integer('product_id')
    .unsigned()
    .references('id')
    .inTable('products')
    .onDelete('CASCADE');
    table
    .string('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');
    table.text('description', 255);
    table
    .integer('rating')
    .unsigned()
    .checkIn([1, 2, 3, 4, 5])
    .notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('reviews');
};
