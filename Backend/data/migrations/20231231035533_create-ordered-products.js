/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ordered_products', function(table) {
    // Composite primary key
    // table.primary(['order_id', 'product_id']);
    // Order to which the product belongs
    table
      .integer('order_id')
      .unsigned()
      .references('id')
      .inTable('orders')
      .onDelete('CASCADE');
    // Product included in the order
    table
      .integer('product_id')
      .unsigned()
      .references('id')
      .inTable('products')
      .onDelete('CASCADE');
    // Quantity of the product in the order
    table.integer('quantity').notNullable();
    // Price of the product at the time of the order
    table.decimal('price', 10, 2).notNullable();
    table.timestamps(true, true);
    // Adding default values for the created_at timestamp only
    // table.timestamps(true, false).defaultTo(knex.fn.now());
    knex.raw(`
    CREATE TRIGGER set_default_timestamps
    BEFORE INSERT ON orders
    FOR EACH ROW
    WHEN NEW.created_at IS NULL
    BEGIN
        SELECT CURRENT_TIMESTAMP INTO NEW.created_at;
    END,
    WHEN NEW.updated_at IS NULL
    BEGIN
        SELECT CURRENT_TIMESTAMP INTO NEW.updated_at;
    END;
`);




  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ordered_products');
};
