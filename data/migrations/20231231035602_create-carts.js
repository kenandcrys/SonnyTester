/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('carts', function(table) {
    table.increments('id').primary();
    // User who owns the cart
    table
    .integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');
    // Subtotal of the cart
    table.decimal('subtotal', 10, 2).defaultTo(0);
    // Status of the cart (e.g., 'active', 'completed', 'abandoned')
    table.string('status').notNullable().defaultTo('active');
    // Session ID for users who are not logged in
    table.string('session_id').nullable();
    // Adding default values for the created_at timestamp only
    table.timestamps(true, true).defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('carts');
};
