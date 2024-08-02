import { Migration } from '@mikro-orm/migrations';

export class Migration20240802175955 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "groups" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "name" text not null);');
    this.addSql('create index "groups_name_index" on "groups" ("name");');

    this.addSql('create table "users" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "name" text not null);');
    this.addSql('create index "users_name_index" on "users" ("name");');

    this.addSql('create table "groups_users" ("group_id" int not null, "user_id" int not null, constraint "groups_users_pkey" primary key ("group_id", "user_id"));');

    this.addSql('alter table "groups_users" add constraint "groups_users_group_id_foreign" foreign key ("group_id") references "groups" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "groups_users" add constraint "groups_users_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "groups_users" drop constraint "groups_users_group_id_foreign";');

    this.addSql('alter table "groups_users" drop constraint "groups_users_user_id_foreign";');

    this.addSql('drop table if exists "groups" cascade;');

    this.addSql('drop table if exists "users" cascade;');

    this.addSql('drop table if exists "groups_users" cascade;');
  }

}
