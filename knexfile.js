// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: '.Data/db.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './Data/Migrations'
    },
    seeds: {
      directory: './Data/Seeds'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './Data/test.db3' 
    },
    useNullAsDefault: true,
    migrations: {
      directory: './Data/Migrations'
    },
    seeds: {
      directory: './Data/Seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
