import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCourseInput {
  @Field()
  courseName: string;
}

@InputType()
export class UpdateCourseInput {
  @Field(() => Int)
  id: number; // You'll need the ID to identify which education to update

  @Field({ nullable: true })
  courseName?: string;
}
