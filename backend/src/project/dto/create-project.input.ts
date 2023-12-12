import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  name: string;

  @Field()
  duration: string;

  @Field()
  description: string;

  @Field(() => [String])
  skillNames: string[];

  @Field()
  role: string;

  @Field()
  teamSize: number;
}

@InputType()
export class UpdateProjectInput {
  @Field(() => Int)
  id: number; // You'll need the ID to identify which profile to update

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  duration?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  skillNames?: string[];

  @Field({ nullable: true })
  role?: string;

  @Field({ nullable: true })
  teamSize?: number;
}
