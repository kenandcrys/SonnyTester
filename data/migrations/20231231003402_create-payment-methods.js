/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('payment_methods', function (table) {
    table.increments('id').primary();
    table
    .integer('user_id')
    .unsigned().references('id')
    .inTable('users')
    .onDelete('CASCADE');
    table.string('card_type');
    table.string('last_four_digits');
    table.date('expiration_date');
    // ... other payment method attributes
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('payment_methods');
};
