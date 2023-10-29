import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  name: string;

  @Field()
  duration: string;

  @Field()
  description: string;

  @Field()
  technologiesUsed: string;

  @Field()
  role: string;

  @Field()
  teamSize: number;
}
