import { Migration } from '@mikro-orm/migrations';

export class Migration20240802180818 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "group_user" ("group_id" int not null, "user_id" int not null, constraint "group_user_pkey" primary key ("group_id", "user_id"));');

    this.addSql('alter table "group_user" add constraint "group_user_group_id_foreign" foreign key ("group_id") references "groups" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "group_user" add constraint "group_user_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade on delete cascade;');

    this.addSql('drop table if exists "groups_users" cascade;');
  }

  async down(): Promise<void> {
    this.addSql('create table "groups_users" ("group_id" int not null, "user_id" int not null, constraint "groups_users_pkey" primary key ("group_id", "user_id"));');

    this.addSql('alter table "groups_users" add constraint "groups_users_group_id_foreign" foreign key ("group_id") references "groups" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "groups_users" add constraint "groups_users_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade on delete cascade;');

    this.addSql('drop table if exists "group_user" cascade;');
  }

}
