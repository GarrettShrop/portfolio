import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Project } from '../../project/entities/project.entity';

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

  @ManyToMany(() => Project) // Add the closing parenthesis and specify the variable name for the projects array
  projects: Project[]; // Specify the variable name for the projects array
}
