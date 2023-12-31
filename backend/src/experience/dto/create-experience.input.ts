import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateExperienceInput {
  @Field()
  organization: string;

  @Field()
  position: string;

  @Field()
  startDate: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field()
  description: string;
}

@InputType()
export class UpdateExperienceInput {
  @Field(() => Int)
  id: number; // You'll need the ID to identify which education to update

  @Field({ nullable: true })
  organization?: string;

  @Field({ nullable: true })
  position?: string;

  @Field({ nullable: true })
  startDate?: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field({ nullable: true })
  description?: string;
}
