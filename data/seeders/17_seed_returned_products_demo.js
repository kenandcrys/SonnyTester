const faker = require("faker");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("returned_products")
    .del()
    .then(async function () {
      // Insert seed entries
      const orders = await knex.select("id").from("orders");
      const products = await knex.select("id").from("products");

      const returnedProducts = [];

      const uniqueOrderProductPairs = new Set();

      outerLoop: for (let i = 0; i < 10; i++) {
        let order, product;

        do {
          order = faker.random.arrayElement(orders);
          product = faker.random.arrayElement(products);

          if (i >= orders.length * products.length) break outerLoop;
        } while (uniqueOrderProductPairs.has(`${order.id}-${product.id}`));
        
        uniqueOrderProductPairs.add(`${order.id}-${product.id}`);

        const returnedProduct = {
          order_id: order.id,
          product_id: product.id,
          quantity: faker.datatype.number({ min: 1, max: 10 }),
          date_received: faker.date.past(),
          return_condition: faker.lorem.sentence(),
          is_eligible_for_resale: faker.datatype.boolean(),
        };

        returnedProducts.push(returnedProduct);
      }

      return knex("returned_products").insert(returnedProducts);
    });
};
