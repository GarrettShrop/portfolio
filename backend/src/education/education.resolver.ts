import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EducationService } from './education.service';
import { Education } from './entities/education.entity';
import { CreateEducationInput } from './dto/education.dto';

@Resolver(() => Education)
export class EducationResolver {
  constructor(private educationService: EducationService) {}

  @Query(() => [Education])
  async getEducations(): Promise<Education[]> {
    return this.educationService.findAll();
  }

  @Query(() => Education)
  async getEducation(@Args('id') id: number): Promise<Education> {
    return this.educationService.findOne(id);
  }

  @Mutation(() => Education)
  async addEducation(
    @Args('input') input: CreateEducationInput,
  ): Promise<Education> {
    return this.educationService.create(input);
  }

  @Mutation(() => Boolean)
  async deleteEducation(@Args('id') id: number): Promise<boolean> {
    await this.educationService.remove(id);
    return true;
  }
}
