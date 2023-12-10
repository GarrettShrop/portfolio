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

  @Field({ nullable: true })
  technologiesUsed?: string;

  @Field({ nullable: true })
  role?: string;

  @Field({ nullable: true })
  teamSize?: number;
}
