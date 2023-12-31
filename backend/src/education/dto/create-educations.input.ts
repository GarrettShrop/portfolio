import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateEducationInput {
  @Field()
  universityName: string;

  @Field()
  degree: string;

  @Field()
  startDate: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field({ nullable: true })
  notes?: string;
}

@InputType()
export class UpdateEducationInput {
  @Field(() => Int)
  id: number; // You'll need the ID to identify which education to update

  @Field({ nullable: true })
  universityName?: string;

  @Field({ nullable: true })
  degree?: string;

  @Field({ nullable: true })
  startDate?: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field({ nullable: true })
  notes?: string;
}
