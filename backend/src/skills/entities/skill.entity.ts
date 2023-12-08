import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // This decorator is for GraphQL
@Entity()
export class Skill {
  @Field(() => Int) // This decorator is for GraphQL
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  skillName: string;

  @Field()
  @Column()
  level: number;
}
