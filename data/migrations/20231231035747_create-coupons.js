/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('coupons', function(table) {
    table.increments('id').primary();
    // Coupon code (assuming alphanumeric)
    table.string('code', 20).unique().notNullable();
    // Discount amount or percentage
    table.decimal('discount_amount', 10, 2).notNullable();
    // Expiration date of the coupon
    table.date('expiration_date').notNullable();
    table.integer('usage_limit');
    table.integer('usage_limit_per_user');
    // Minimum Purchase Amount
    table.decimal('min_purchase_amount', 10, 2);
    // Applicability to Specific Products or Categories
    table.json('applicable_products'); // Example: ["product_id_1", "product_id_2"]
    table.json('applicable_categories'); // Example: ["category_id_1", "category_id_2"]
    // Start Date
    table.date('start_date');
    // Usage Tracking
    table.integer('usage_count').defaultTo(0);
    // Conditions for Applicability
    table.json('applicability_conditions'); // Example: {"min_items": 3, "category_required": "electronics"}
    // Visibility
    // table.boolean('is_public').defaultTo(true);
    knex.raw(`
            CREATE TRIGGER set_default_is_public
            BEFORE INSERT ON your_table_name
            FOR EACH ROW
            WHEN NEW.is_public IS NULL
            BEGIN
                SELECT true INTO NEW.is_public;
            END;
        `);
    // User Restrictions
    // table.boolean('new_users_only').defaultTo(false);
    knex.raw(`
    CREATE TRIGGER set_default_new_users_only
    BEFORE INSERT ON your_table_name
    FOR EACH ROW
    WHEN NEW.new_users_only IS NULL
    BEGIN
        SELECT false INTO NEW.new_users_only;
    END;
`);

    // Notes or Descriptions
    table.text('notes');
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
    return knex.schema.dropTableIfExists('coupons_applied')
    .then(() => knex.schema.dropTableIfExists('coupons'));
};
