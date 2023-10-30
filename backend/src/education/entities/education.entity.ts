import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Education {
  @Field(() => Int) // This decorator is for GraphQL
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  universityName: string;

  @Field()
  @Column()
  degree: string;

  @Field()
  @Column()
  startDate: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  endDate?: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  notes?: string;
}
