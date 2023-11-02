import { InputType, Field } from '@nestjs/graphql';

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
