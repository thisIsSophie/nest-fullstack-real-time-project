import { Entity, Property, Opt } from '@mikro-orm/core';
import { EntityBase } from '../../database/base.entity';

@Entity()
class TodoEntity extends EntityBase {
  @Property({type: 'text'})
  title: string;

  @Property({  type: 'text', nullable: true })
  content?: Opt<string>;
}

export default TodoEntity;
