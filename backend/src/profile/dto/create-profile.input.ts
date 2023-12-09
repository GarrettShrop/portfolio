import { InputType, Field, Int } from '@nestjs/graphql';

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

@InputType()
export class UpdateProfileInput {
  @Field(() => Int)
  id: number; // You'll need the ID to identify which profile to update

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phoneNumber?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  githubLink?: string;

  @Field({ nullable: true })
  linkedinLink?: string;

  @Field({ nullable: true })
  portfolioLink?: string;
}
