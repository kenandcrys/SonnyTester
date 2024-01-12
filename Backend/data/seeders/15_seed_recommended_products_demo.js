const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recommendations').del()
    .then(async function () {
      // Insert seed entries
      const users = await knex.select('id').from('users');
      const products = await knex.select('id').from('products');

      const recommendations = [];

      const uniqueUserProductPairs = new Set(); // To track unique user_id and product_id pairs

      for (let i = 0; i < 10; i++) { // Adjust the loop count based on how many entries you want
        let user, product;

        // Ensure unique user_id and product_id pair
        do {
          user = faker.random.arrayElement(users);
          product = faker.random.arrayElement(products);
        } while (uniqueUserProductPairs.has(`${user.id}-${product.id}`));

        uniqueUserProductPairs.add(`${user.id}-${product.id}`);

        const recommendation = {
          user_id: user.id,
          product_id: product.id,
          created_at: faker.date.past(),
          updated_at: faker.date.recent(),
        };

        recommendations.push(recommendation);
      }

      return knex('recommendations').insert(recommendations);
    });
};
