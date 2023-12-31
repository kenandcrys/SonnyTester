/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cart_products', function(table) {
    // Composite primary key
    table.primary(['cart_id', 'product_id']);
    // Cart the product belongs
    table
      .integer('cart_id')
      .unsigned()
      .references('id')
      .inTable('carts')
      .onDelete('CASCADE');
    // Product in the cart
    table
      .integer('product_id')
      .unsigned()
      .references('id')
      .inTable('products')
      .onDelete('CASCADE');
    // Product name associated with the product_id
    table.string('product_name').nullable();
    // Product price associated with the product_id
    table.decimal('price', 10, 2).notNullable();
    // Quantity of the product in the cart
    table.integer('quantity').notNullable();
    // Seller of the product
    table
      .integer('seller_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
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
  return knex.schema.dropTableIfExists('cart_products');
};
