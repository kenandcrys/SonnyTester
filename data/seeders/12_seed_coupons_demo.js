function generateCouponCode() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let couponCode = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    couponCode += characters.charAt(randomIndex);
  }

  return couponCode;
}

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("coupons").del();

  const productIds = await knex.select("id").from("products");

  const seedData = [];

  for (let i = 0; i < 10; i++) {
    const coupon = generateCouponCode();

    const seed = {
      code: coupon,
      discount_amount: Math.random() * (999999.99 - 0) + 0,
      expiration_date: new Date(Date.now() + Math.random() * 1000 * 60 * 60 * 24 * 30), // Random date in the future month
      usage_limit: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      usage_limit_per_user: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
      min_purchase_amount: Math.random() * (1000 - 10) + 10,
      applicable_products: JSON.stringify([
        Math.floor(Math.random() * productIds.length),
        Math.floor(Math.random() * productIds.length),
        Math.floor(Math.random() * productIds.length),
      ]),
      applicable_categories: JSON.stringify([
        Math.floor(Math.random() * productIds.length),
        Math.floor(Math.random() * productIds.length),
        Math.floor(Math.random() * productIds.length),
      ]),
      start_date: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 30), // Random date in the past month
      usage_count: Math.floor(Math.random() * (100 - 0 + 1)) + 0,
      applicability_conditions: JSON.stringify({
        min_items: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        category_required: "Random category",
      }),
    };

    seedData.push(seed);
  }

  return knex("coupons").insert(seedData);
};
