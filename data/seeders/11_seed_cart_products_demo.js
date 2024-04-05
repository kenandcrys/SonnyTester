exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cart_products").del();

  const cartIds = await knex.select("id").from("carts");
  const productIds = await knex.select("id").from("products");
  const userIds = await knex.select("id").from("users");

  const seedData = [];

  const uniqueCartProductPairs = new Set();
  outerLoop: for (let i = 0; i < 10; i++) {
    let cart, product;

    do {
      cart = cartIds[Math.floor(Math.random() * cartIds.length)];
      product = productIds[Math.floor(Math.random() * productIds.length)];

      if (i >= cartIds.length * productIds.length) break outerLoop;
    } while (uniqueCartProductPairs.has(`${cart.id}-${product.id}`));

    uniqueCartProductPairs.add(`${cart.id}-${product.id}`);

    const seed = {
      cart_id: cart.id,
      product_id: product.id,
      product_name: `Product ${product.id}`, // Update with actual product name logic
      price: Math.random() * (1000 - 1) + 1, // Generate random price
      quantity: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      seller_id: userIds[Math.floor(Math.random() * userIds.length)].id,
    };

    seedData.push(seed);
  }

  return knex("cart_products").insert(seedData);
};
