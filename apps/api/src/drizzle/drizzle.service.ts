import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { PG_CONNECTION } from 'src/constants';
import schema from './schema';

@Injectable()
export class DrizzleService {
  constructor(
    @Inject(PG_CONNECTION)
    public readonly db: NodePgDatabase<typeof schema>,
  ) {}
}
