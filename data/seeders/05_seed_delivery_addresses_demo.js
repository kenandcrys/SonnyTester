const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('delivery_addresses').del()
    .then(async function () {
      // Inserts seed entries
      const userIds = await knex.select('id').from('users');

      const seedData = [];
      const numberOfSeeds = 10; // Adjust as needed

      for (let i = 0; i < numberOfSeeds; i++) {
        const seed = {
          user_id: faker.random.arrayElement(userIds).id,
          street_address: faker.address.streetAddress(),
          address_line_2: faker.address.secondaryAddress(),
          address_line_3: faker.address.secondaryAddress(),
          city: faker.address.city(),
          postal_code: faker.address.zipCode(),
          contact_number: faker.phone.phoneNumber(),
          delivery_notes: faker.lorem.sentence(),
          created_at: faker.date.past(),
          updated_at: faker.date.recent(),
        };

        seedData.push(seed);
      }

      return knex('delivery_addresses').insert(seedData);
    });
};
