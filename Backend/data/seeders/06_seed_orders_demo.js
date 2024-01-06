const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(async function () {
      // Inserts seed entries
      const userIds = await knex.select('id').from('users');
      const billingAddressIds = await knex.select('id').from('payment_methods');
      const deliveryAddressIds = await knex.select('id').from('delivery_addresses');
      const paymentMethodIds = await knex.select('id').from('payment_methods');

      const seedData = [];
      const numberOfSeeds = 10; // Adjust as needed

      for (let i = 0; i < numberOfSeeds; i++) {
        const seed = {
          user_id: faker.random.arrayElement(userIds).id,
          delivery_fee: faker.random.number({ min: 5, max: 20, precision: 0.01 }),
          total_price: faker.random.number({ min: 50, max: 200, precision: 0.01 }),
          billing_address_id: faker.random.arrayElement(billingAddressIds).id,
          delivery_address_id: faker.random.arrayElement(deliveryAddressIds).id,
          payment_method_id: faker.random.arrayElement(paymentMethodIds).id,
          status: faker.random.arrayElement(['pending', 'shipped', 'delivered']),
          date_shipped: faker.date.recent(),
          created_at: faker.date.past(),
          updated_at: faker.date.recent(),
        };

        seedData.push(seed);
      }

      return knex('orders').insert(seedData);
    });
};
