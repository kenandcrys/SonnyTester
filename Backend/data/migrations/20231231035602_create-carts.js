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
    // table.decimal('subtotal', 10, 2).defaultTo(0);
    // // Status of the cart (e.g., 'active', 'completed', 'abandoned')
    // table.string('status').notNullable().defaultTo('active');

              // Using knex.raw to set default value for the 'subtotal' column
            knex.raw(`
              CREATE TRIGGER set_default_subtotal
              BEFORE INSERT ON orders
              FOR EACH ROW
              WHEN NEW.subtotal IS NULL
              BEGIN
                  SELECT 0.00 INTO NEW.subtotal;
              END;
          `);
  
          // Using knex.raw to set default value for the 'status' column
          knex.raw(`
              CREATE TRIGGER set_default_status
              BEFORE INSERT ON orders
              FOR EACH ROW
              WHEN NEW.status IS NULL
              BEGIN
                  SELECT 'active' INTO NEW.status;
              END;
          `);

    // Session ID for users who are not logged in
    table.string('session_id').nullable();
    // Adding default values for the created_at timestamp only
    // table.timestamps(true, true).defaultTo(knex.fn.now());

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
  return knex.schema.dropTableIfExists('carts');
};
