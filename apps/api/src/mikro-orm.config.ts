import { Migrator } from '@mikro-orm/migrations';
import { SeedManager } from '@mikro-orm/seeder';
import { defineConfig } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import 'dotenv/config';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export default defineConfig({
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  driver: PostgreSqlDriver,
  dbName: process.env.POSTGRES_DB,
  entities: ['**/*.entity.js'],
  entitiesTs: ['**/*.entity.ts'],
  debug: true,
  metadataProvider: TsMorphMetadataProvider,
  extensions: [Migrator, SeedManager],
});
