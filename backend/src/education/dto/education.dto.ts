import { InputType, Field } from '@nestjs/graphql';

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
