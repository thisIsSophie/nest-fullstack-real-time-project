import { Migration } from '@mikro-orm/migrations';

export class Migration20240801224510 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "todo_entity" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "title" text not null, "content" text null);');

    this.addSql('drop table if exists "drizzle"."__drizzle_migrations" cascade;');

    this.addSql('drop schema if exists "drizzle";');
  }

  async down(): Promise<void> {
    this.addSql('create schema if not exists "drizzle";');
    this.addSql('create table "drizzle"."__drizzle_migrations" ("id" serial primary key, "hash" text not null, "created_at" int8 null);');

    this.addSql('drop table if exists "todo_entity" cascade;');
  }

}
