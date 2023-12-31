exports.seed = function(knex) {
    return knex.transaction(async (trx) => {
      await trx('product').del();
      await trx('product').insert([
        {
            type: 'suit',
            name: 'ugly Suit',
            description: 'Something I would not wear',
            price: 120
        },
        {
            type: 'shoes',
            name: 'high-tops',
            description: 'Best in the world',
            price: 99.95,
        },
      ]);
  
    });
  };