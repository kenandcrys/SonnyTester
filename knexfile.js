const { knexSnakeCaseMappers } = require("objection");

const sharedConfig = {
    client: "sqlite3",
    useNullAsDefault: true,
    migrations: {
        directory: "./data/migrations",
    },
    seeds: {
        directory: "./data/seeders",
    },
    // this enables foreign keys in SQLite
    pool: {
        afterCreate: (conn, done) => {
            conn.run("PRAGMA foreign_keys = ON", done);
        },
    },
};

module.exports = {
    development: {
        ...sharedConfig,
        client: "sqlite3",
        connection: { filename: "./data/data.db3" },
    },
    testing: {
        ...sharedConfig,
        connection: { filename: "./data/dataTesting.db3" },
    },
    production: {
        client: "postgres",
        seederStorage: "sequelize",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
        connection: {
            host: process.env.HOST,
            port: process.env.DB_PORT,
            database: process.env.DATABASE_NAME,
            user: process.env.USER,
            password: process.env.PASSWORD,
            ssl: true,
        },
        seeds: {
            directory: "./data/seeders",
        },
        migrations: {
            directory: "./data/migrations",
        },
        ...knexSnakeCaseMappers,
    },
};