// DO NOT CHANGE THIS FILE
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeders: {
    directory: './data/seeders',
  },
  // this enables foreign keys in SQLite
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },
}

module.exports = {
  development: {
    ...sharedConfig,
    client: "sqlite3",
    connection: { filename: './data/data.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/dataTesting.db3' },
  },
  production: {
    client: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    connection: {
      host: '',
      port: 5432,
      database: '',
      user: '',
      password: '',
    }
  }
};