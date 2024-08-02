import { Entity, Property, Collection, ManyToMany, Ref } from '@mikro-orm/core';
import { EntityBase } from '../database/base.entity';
import Group from '../groups/group.entity';

@Entity({tableName: 'users'})
class User extends EntityBase {

  @Property({type: 'text', index: true})
  username!: string;

  @Property({ lazy: true, ref: true, type: 'text' })
  password!: Ref<string>;

  @ManyToMany(() => Group, group => group.users)
  groups = new Collection<Group>(this);

}

export default User;
