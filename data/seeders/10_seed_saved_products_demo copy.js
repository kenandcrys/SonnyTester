exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("saved_products").del();

    // Get all user and product IDs
    const userIds = await knex.select("id").from("users");
    const productIds = await knex.select("id").from("products");

    // Define the batch size
    const batchSize = 10;

    // Split the product IDs into chunks of batchSize
    const productChunks = chunkArray(productIds, batchSize);

    const seedData = [];

    for (let i = 0; i < userIds.length; i++) {
        // Simulate a random count between 1 and productChunks.length
        const count = Math.floor(Math.random() * productChunks.length) + 1;
        const shuffledProductChunks = shuffleArray(productChunks);

        for (let j = 0; j < count; j++) {
            const chunk = shuffledProductChunks[j];
            const products = chunk.map((product) => ({
                buyer_id: userIds[i].id,
                product_id: product.id,
                seller_id: getRandomUserId(userIds),
                date_saved: new Date(), // Use current date for simplicity
            }));

            seedData.push(...products);
        }
    }

    // Insert the seed data in batches of batchSize
    for (let k = 0; k < seedData.length; k += batchSize) {
        const chunk = seedData.slice(k, k + batchSize);
        await knex("saved_products").insert(chunk);
    }

    console.log("Batch insert completed successfully.");
};

// Helper function to shuffle an array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Helper function to get a random user ID
function getRandomUserId(userIds) {
    const randomIndex = Math.floor(Math.random() * userIds.length);
    return userIds[randomIndex].id;
}

// Helper function to chunk an array into smaller arrays
function chunkArray(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
}
