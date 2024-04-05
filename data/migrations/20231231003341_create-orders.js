/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    // Create the 'orders' table
    return knex.schema.createTable('orders', function(table) {
        table.increments('id').primary();
        // User who placed the order
        table
            .string('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
        // Shipping fee
        table.decimal('delivery_fee', 10, 2).notNullable();
        // Total price of the order
        table.decimal('total_price', 10, 2).notNullable();
        // Billing address
        table
            .integer('billing_address_id')
            .unsigned()
            .references('id')
            .inTable('payment_methods')
            .onDelete('SET NULL');
        // Delivery address
        table
            .integer('delivery_address_id')
            .unsigned()
            .references('id')
            .inTable('delivery_addresses')
            .onDelete('SET NULL');
        // Payment method used for the order
        table
            .integer('payment_method_id')
            .unsigned()
            .references('id')
            .inTable('payment_methods')
            .onDelete('SET NULL');
        // Order status (e.g., 'pending', 'shipped', 'delivered')
        table.string('status').notNullable();
        // Date order has shipped
        table.date('date_shipped').notNullable();
        // Adding default values for the created_at timestamp only
        table.timestamps(true, true);
    })
    .then(() => {
        // Create the 'coupons' table
        return knex.schema.createTable('coupons', function(table) {
          table.increments('id').primary();
          // Define columns for the 'coupons' table here
  
          // Add foreign key constraint
          table.integer('order_id').unsigned().references('id').inTable('orders').onDelete('CASCADE');
        });
    })
    .then(() => {
        // SQLite triggers for setting default values
        knex.raw(`
            CREATE TRIGGER set_default_status
            BEFORE INSERT ON orders
            FOR EACH ROW
            WHEN NEW.status IS NULL
            BEGIN
                SELECT 'pending' INTO NEW.status;
            END;
        `);
  
        knex.raw(`
            CREATE TRIGGER set_default_date_shipped
            BEFORE INSERT ON orders
            FOR EACH ROW
            WHEN NEW.date_shipped IS NULL
            BEGIN
                SELECT CURRENT_DATE INTO NEW.date_shipped;
            END;
        `);
    });
  };
  
  /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
  exports.down = function(knex) {
    // Remove foreign key constraint
    return knex.schema.table('coupons', function(table) {
      table.dropForeign('order_id');
    })
    // Drop the 'coupons' table
    .then(() => knex.schema.dropTableIfExists('coupons'))
    // Drop the 'orders' table
    .then(() => knex.schema.dropTableIfExists('orders'));
  };
  