/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("supports", (table) => {
    table.increments();
    table
      .string("user_id")
      .references("id")
      .inTable("users")
      .onDelete("cascade")
      .index();
    table.string("type", 45).notNullable();
    table.string("status", 45).notNullable();
    table.text("description").notNullable();
    table.text("response");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("supports");
};
