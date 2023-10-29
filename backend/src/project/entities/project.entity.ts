import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

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
  technologiesUsed: string;

  @Field()
  @Column()
  role: string;

  @Field()
  @Column()
  teamSize: number;
}
