/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('returns', function (table) {
    table.increments('id').primary();
    table
    .integer('order_id')
    .unsigned()
    .references('id')
    .inTable('orders')
    .onDelete('CASCADE');
    table
    .integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');
    table.text('reason').notNullable();
    table.boolean('approved').defaultTo(false);
    table.text('rejection_reason', 255).nullable();
    table.timestamps(true, true);
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('returns');
};
