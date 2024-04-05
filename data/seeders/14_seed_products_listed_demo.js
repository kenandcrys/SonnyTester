exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products_listed').del();

  const users = await knex.select('id').from('users');
  const products = await knex.select('id').from('products');

  const productsListed = [];
  const uniqueUserProductPairs = new Set();

  for (let i = 0; i < 10; i++) {
    let user, product;

    // Generate unique user_id and product_id pair
    do {
      user = users[Math.floor(Math.random() * users.length)];
      product = products[Math.floor(Math.random() * products.length)];
    } while (uniqueUserProductPairs.has(`${user.id}-${product.id}`));

    uniqueUserProductPairs.add(`${user.id}-${product.id}`);

    const productListing = {
      user_id: user.id,
      product_id: product.id,
    };

    productsListed.push(productListing);
  }

  await knex('products_listed').insert(productsListed);
};
