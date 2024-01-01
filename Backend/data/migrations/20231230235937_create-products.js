/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", function (table) {
    table.increments("id").primary(); // Auto-incrementing primary key
    table
      .integer('user_id') //foreign key for user id from users table that created the product
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index(); //Creates an index on the "user_id" column. This improves the speed of queries that involve searching or joining based on this column
    table.string("name").notNullable();
    table.text("description").notNullable();
    table.text("category").notNullable();
    table.json('images'); // store an array of images
    table.text("status").notNullable().defaultTo('unpublished'); // Adds product publish status that defaults to unpublished
    table.decimal("price", 10, 2).notNullable(); // Example: 12345.67
    table.integer("stock_quantity").notNullable().defaultTo(0); // Adds product stock quantity that defaults to 0
    table.timestamps(true, true); // Adds 'created_at' and 'updated_at' timestamp columns
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
