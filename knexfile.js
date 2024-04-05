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
            host: "dpg-cnv7815a73kc73c7fk90-a.ohio-postgres.render.com",
            port: 5432,
            database: "sonny_xd3j",
            user: "sonny_xd3j_user",
            password: "h2UQbvJXOKjPsS4kDg82jNRGz73IFosI",
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