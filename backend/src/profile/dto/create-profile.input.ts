import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfileInput {
  @Field()
  name: string;

  @Field()
  phoneNumber: string;

  @Field()
  email: string;

  @Field()
  githubLink: string;

  @Field()
  linkedinLink: string;

  @Field()
  portfolioLink: string;
}
