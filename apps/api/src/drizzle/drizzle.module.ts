import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';
import { PG_CONNECTION } from 'src/constants';
import schema from './schema';
import { DrizzleService } from './drizzle.service';

@Module({
  providers: [
    DrizzleService,
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const pool = new Pool({
          host: configService.get('POSTGRES_HOST'),
          port: configService.get('POSTGRES_PORT'),
          username: configService.get('POSTGRES_USER'),
          password: configService.get('POSTGRES_PASSWORD'),
          database: configService.get('POSTGRES_DB'),
        });

        return drizzle(pool, { schema: schema });
      },
    },
  ],
  exports: [DrizzleService],
})
export class DrizzleModule {}
