exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('recommendations').del();

  const users = await knex.select('id').from('users');
  const products = await knex.select('id').from('products');

  const recommendations = [];
  const uniqueUserProductPairs = new Set();

  for (let i = 0; i < 10; i++) {
    let user, product;

    // Generate unique user_id and product_id pair
    do {
      user = users[Math.floor(Math.random() * users.length)];
      product = products[Math.floor(Math.random() * products.length)];
    } while (uniqueUserProductPairs.has(`${user.id}-${product.id}`));

    uniqueUserProductPairs.add(`${user.id}-${product.id}`);

    const recommendation = {
      user_id: user.id,
      product_id: product.id,
      created_at: new Date(new Date().getTime() - Math.random() * 10000000000), // Random date in the past 10000000000 milliseconds (about 115 days)
      updated_at: new Date(), // Current date and time
    };

    recommendations.push(recommendation);
  }

  await knex('recommendations').insert(recommendations);
};
