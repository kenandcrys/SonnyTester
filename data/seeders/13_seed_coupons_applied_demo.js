exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('coupons_applied').del();

  const orders = await knex.select('id').from('orders');
  const coupons = await knex.select('id').from('coupons');
  const users = await knex.select('id').from('users');

  const couponsApplied = [];

  for (let i = 0; i < 10; i++) {
    const orderIndex = Math.floor(Math.random() * orders.length);
    const couponIndex = Math.floor(Math.random() * coupons.length);
    const userIndex = Math.floor(Math.random() * users.length);

    const couponApplied = {
      order_id: orders[orderIndex].id,
      coupon_id: coupons[couponIndex].id,
      user_id: users[userIndex].id,
      discount_amount: Math.floor(Math.random() * (50 - 5 + 1) + 5), // Random discount amount between 5 and 50
      date_applied: new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30)), // Random date in the past month
    };

    couponsApplied.push(couponApplied);
  }

  await knex('coupons_applied').insert(couponsApplied);
};
