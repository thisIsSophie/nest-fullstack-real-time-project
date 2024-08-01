import { Entity, Property, PrimaryKey, Opt } from '@mikro-orm/core';

@Entity()
class TodoEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  title: string;

  @Property({ nullable: true })
  content?: Opt<string>;
}

export default TodoEntity;
