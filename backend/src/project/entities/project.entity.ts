import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Skill } from '../../skills/entities/skill.entity';

@ObjectType() // This decorator is for GraphQL
@Entity()
export class Project {
  @Field(() => Int) // This decorator is for GraphQL
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  duration: string;

  @Field()
  @Column({ type: 'text' })
  description: string;

  @Field()
  @Column()
  role: string;

  @Field()
  @Column()
  teamSize: number;

  @Field(() => [Skill])
  @ManyToMany(() => Skill, (skill) => skill.projects)
  @JoinTable()
  skills: Skill[];
}
