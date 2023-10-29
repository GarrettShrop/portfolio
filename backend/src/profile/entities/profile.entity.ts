import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // This decorator is for GraphQL
@Entity()
export class Profile {
  @Field(() => Int) // This decorator is for GraphQL
  @PrimaryGeneratedColumn()
  id: number;

  @Field() // This decorator is for GraphQL
  @Column()
  name: string;

  @Field() // This decorator is for GraphQL
  @Column()
  phoneNumber: string;

  @Field() // This decorator is for GraphQL
  @Column()
  email: string;

  @Field() // This decorator is for GraphQL
  @Column()
  githubLink: string;

  @Field() // This decorator is for GraphQL
  @Column()
  linkedinLink: string;

  @Field() // This decorator is for GraphQL
  @Column()
  portfolioLink: string;
}
