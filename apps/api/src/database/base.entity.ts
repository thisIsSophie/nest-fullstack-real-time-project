import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ abstract: true})
export abstract class EntityBase {

    @PrimaryKey()
    id!: number;

    @Property()
    createdAt = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt = new Date();
}