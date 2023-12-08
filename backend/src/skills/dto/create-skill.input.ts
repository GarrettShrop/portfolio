import { InputType, Field } from '@nestjs/graphql';

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
