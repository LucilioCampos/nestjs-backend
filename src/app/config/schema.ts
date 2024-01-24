import z from 'zod';

export const configSchema = z.object({
  database: z.object({
    client: z.string().default('postgresql'),
    connection: z.object({
      database: z.string(),
      port: z.number(),
      user: z.string(),
      password: z.string(),
    }),
    pool: z.object({
      min: z.number(),
      max: z.number(),
    }),
    migrations: z.object({
      tableName: z.string().default('knex_migrations'),
      schema: z.string().default('public'),
      directory: z.string(),
    }),
  }),
  backgroundJobs: z.object({
    redis: z.object({
      host: z.string().optional(),
      port: z.number().optional(),
      username: z.string().optional(),
      password: z.string().optional(),
      db: z.number().optional(),
      maxRetriesPerRequest: z.number().optional(),
    }),
  }),
  vtex: z.object({
    account: z.string().default('onservicosdigitais'),
    auth: z.object({
      appKey: z.string(),
      appToken: z.string(),
    }),
    cache: z.object({
      db: z.number(),
    }),
  }),
});

export type Config = z.output<typeof configSchema>;
