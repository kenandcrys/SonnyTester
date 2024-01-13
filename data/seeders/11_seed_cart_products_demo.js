const faker = require("faker");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cart_products")
    .del()
    .then(async function () {
      // Inserts seed entries
      const cartIds = await knex.select("id").from("carts");
      const productIds = await knex.select("id").from("products");
      const userIds = await knex.select("id").from("users");

      const seedData = [];

      const uniqueCartProductPairs = new Set();
      outerLoop: for (let i = 0; i < 10; i++) {
        let cart, product;

        do {
          cart = faker.random.arrayElement(cartIds);
          product = faker.random.arrayElement(productIds);

          if (i >= cartIds.length * productIds.length) break outerLoop;
        } while (uniqueCartProductPairs.has(`${cart.id}-${product.id}`));

        uniqueCartProductPairs.add(`${cart.id}-${product.id}`);

        const seed = {
          cart_id: cart.id,
          product_id: product.id,
          product_name: faker.commerce.product(),
          price: faker.commerce.price(),
          quantity: faker.datatype.number({ min: 1, max: 100 }),
          seller_id: faker.random.arrayElement(userIds).id,
        };

        seedData.push(seed);
      }

      return knex("cart_products").insert(seedData);
    });
};
