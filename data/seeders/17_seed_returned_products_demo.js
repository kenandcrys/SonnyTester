exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("returned_products").del();

  const orders = await knex.select("id").from("orders");
  const products = await knex.select("id").from("products");

  const returnedProducts = [];

  const uniqueOrderProductPairs = new Set();

  outerLoop: for (let i = 0; i < 10; i++) {
    let order, product;

    do {
      order = orders[Math.floor(Math.random() * orders.length)];
      product = products[Math.floor(Math.random() * products.length)];

      if (i >= orders.length * products.length) break outerLoop;
    } while (uniqueOrderProductPairs.has(`${order.id}-${product.id}`));

    uniqueOrderProductPairs.add(`${order.id}-${product.id}`);

    const returnedProduct = {
      order_id: order.id,
      product_id: product.id,
      quantity: Math.floor(Math.random() * 10) + 1, // Random quantity between 1 and 10
      date_received: new Date(new Date().getTime() - Math.random() * 10000000000), // Random date in the past 10000000000 milliseconds (about 115 days)
      return_condition: "Sample return condition", // Adjust as needed
      is_eligible_for_resale: Math.random() < 0.5, // 50% chance of being eligible for resale
    };

    returnedProducts.push(returnedProduct);
  }

  await knex("returned_products").insert(returnedProducts);
};
