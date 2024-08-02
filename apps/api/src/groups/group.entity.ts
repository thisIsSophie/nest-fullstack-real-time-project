import { Entity, Property, Collection, ManyToMany } from '@mikro-orm/core';
import { EntityBase } from '../database/base.entity';
import User from '../users/user.entity';

@Entity({tableName: 'groups'})
class Group extends EntityBase {

  @Property({type: 'text', index: true})
  name: string;

  @ManyToMany({pivotTable: 'group_user'})
  users: Collection<User> = new Collection<User>(this);
}

export default Group;
