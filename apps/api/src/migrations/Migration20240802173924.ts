import { Migration } from '@mikro-orm/migrations';

export class Migration20240802173924 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "todos" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "title" text not null, "content" text null);');
    this.addSql('create index "todos_title_index" on "todos" ("title");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "todos" cascade;');
  }

}
