/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    table.increments('id').primary();
    table
    .integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');
    table.string('street_address', 255).notNullable();
    table.string('address_line_2').nullable();
    table.string('address_line_3').nullable();
    table.string('city', 100).notNullable();
    table.string('postal_code', 20).notNullable();
    table.string('contact_number').defaultTo(knex.raw('(SELECT phone FROM users WHERE users.id = user_id)')); //defaulting to users phone number on profile
    table.string("delivery notes", 128).nullable();
    table.timestamps(true, true);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('delivery_addresses');
};
