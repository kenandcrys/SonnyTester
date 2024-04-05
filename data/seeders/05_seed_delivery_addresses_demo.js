function generateRandomAddress() {
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
  const streets = ["Main St", "Broadway", "Elm St", "Maple Ave", "Oak St", "Washington Ave", "Lake St", "Park Ave", "Cedar St", "Pine St"];
  const zipCodes = ["10001", "90001", "60601", "77001", "85001", "19101", "78201", "92101", "75201", "95101"];

  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const randomStreet = streets[Math.floor(Math.random() * streets.length)];
  const randomZipCode = zipCodes[Math.floor(Math.random() * zipCodes.length)];

  return {
    street_address: `${Math.floor(Math.random() * 1000)} ${randomStreet}`,
    address_line_2: "",
    address_line_3: "",
    city: randomCity,
    postal_code: randomZipCode,
    contact_number: `+1${Math.floor(Math.random() * 10000000000)}`,
    delivery_notes: "Leave at the door if no one is home.",
    created_at: new Date(),
    updated_at: new Date(),
  };
}

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('delivery_addresses').del()
    .then(async function () {
      // Inserts seed entries
      const userIds = await knex.select('id').from('users');

      const seedData = [];
      const numberOfSeeds = 10; // Adjust as needed

      for (let i = 0; i < numberOfSeeds; i++) {
        const seed = {
          user_id: userIds[Math.floor(Math.random() * userIds.length)].id,
          ...generateRandomAddress(),
        };

        seedData.push(seed);
      }

      return knex('delivery_addresses').insert(seedData);
    });
};
