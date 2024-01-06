const faker = require("faker");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("saved_products")
    .del()
    .then(async function () {
      // Inserts seed entries
      const userIds = await knex.select("id").from("users");
      const productIds = await knex.select("id").from("products");

      const seedData = [];

      for (let i = 0; i < userIds.length; i++) {
        const count = faker.random.number({ min: 1, max: productIds.length });
        const shuffledProductIds = faker.helpers.shuffle(productIds);

        for (let j = 0; j < count; j++) {
          const seed = {
            buyer_id: userIds[i].id,
            product_id: shuffledProductIds[j].id,
            seller_id: faker.random.arrayElement(userIds).id,
            date_saved: faker.date.recent(),
          };

          seedData.push(seed);
        }
      }

      return knex("saved_products").insert(seedData);
    });
};
