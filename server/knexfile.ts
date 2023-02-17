const path = require('path')

module.exports = {
    development: {
        client: 'pg',
        connection: {
          database: 'ecoleta',
          user: 'postgres',
          password: 's1mples'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations',
          directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        seeds: {
          tableName: 'knex_seeds',
          directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        }
    }

}