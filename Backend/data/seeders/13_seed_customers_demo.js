const faker = require('faker');

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('customers').del();

  const users = await knex.select('id').from('users');
  const orders = await knex.select('id').from('orders');

  const customers = [];

  for (let i = 0; i < 10; i++) {
    const user = faker.random.arrayElement(users);
    const order = faker.random.arrayElement(orders);

    // Check if the user_id already exists in customers
    const userExists = await knex('customers').where({ user_id: user.id }).first();

    if (!userExists) {
      const customer = {
        user_id: user.id,
        order_id: order.id,
        number_of_orders: faker.datatype.number({ min: 1, max: 20 }),
        customer_since_years: faker.datatype.number({ min: 1, max: 10 }),
        total_spending: faker.datatype.number({ min: 100, max: 10000 }),
        average_order_amount: faker.datatype.number({ min: 10, max: 500 }),
        first_purchase_date: faker.date.past(),
        last_purchase_date: faker.date.recent(),
        seller_id: faker.random.arrayElement(users).id,
      };

      customers.push(customer);
    }
  }

  return knex('customers').insert(customers);
};
