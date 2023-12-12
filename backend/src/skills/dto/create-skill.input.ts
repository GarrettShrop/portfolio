import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateSkillInput {
  @Field()
  skillName: string;

  @Field()
  level: number;
}

@InputType()
export class CreateSkillsInput {
  @Field(() => [CreateSkillInput])
  skills: CreateSkillInput[];
}

@InputType()
export class UpdateSkillInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  skillName?: string;

  @Field(() => Int, { nullable: true })
  level?: number;
}
