import { configSchema } from './schema';

const development = configSchema.parse({
  database: {
    client: 'postgresql',
    connection: {
      database: 'onstores_test',
      port: 5432,
      user: 'node',
      password: 'node',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      schemaName: 'public',
      directory: 'knex/migrations',
    },
  },
  backgroundJobs: {
    redis: {
      db: 1,
      maxRetriesPerRequest: 0,
    },
  },
  vtex: {
    auth: {
      appKey: 'APP_KEY',
      appToken: 'APP_TOKEN',
    },
    cache: {
      db: 2,
    },
  },
});

export default development;
