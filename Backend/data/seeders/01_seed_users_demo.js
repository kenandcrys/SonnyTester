exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          // Admin User
          {
            id: 1,
            name: 'Admin User',
            email: 'admin@example.com',
            role: 'admin',
            password: 'adminpassword', // You may need to hash the password in a real-world scenario
          },
          // Seller User
          {
            id: 2,
            name: 'Seller User',
            email: 'seller@example.com',
            role: 'seller',
            password: 'sellerpassword',
            business_name: 'Sample Business',
            business_address: '123 Main Street',
            business_city: 'Sample City',
            business_postal_code: '12345',
          },
          // Seller with Premier Account
          {
            id: 3,
            name: 'Premier Seller',
            email: 'premier@example.com',
            role: 'premier_seller',
            password: 'premierpassword',
            business_name: 'Premier Business',
            business_address: '456 Premier Avenue',
            business_city: 'Premier City',
            business_postal_code: '67890',
            biz_cert_number_ein: '123456789',
            verification_images: {
              document1: 'image_url1.jpg',
              document2: 'image_url2.jpg',
            },
          },
          // Buyer User
          {
            id: 4,
            name: 'Buyer User',
            email: 'buyer@example.com',
            role: 'buyer',
            password: 'buyerpassword',
            address: '789 Buyer Lane',
            city: 'Buyer City',
            postal_code: '54321',
          },
        ]);
      });
  };
  