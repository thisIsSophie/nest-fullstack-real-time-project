import { Entity, Property, Opt } from '@mikro-orm/core';
import { EntityBase } from '../database/base.entity';

@Entity({tableName: 'todos'})
class Todo extends EntityBase {

  @Property({type: 'text', index: true})
  title: string;

  @Property({  type: 'text', nullable: true })
  content?: Opt<string>;
}

export default Todo;
