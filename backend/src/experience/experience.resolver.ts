import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { ExperienceService } from './experience.service';
import { Experience } from './entities/experience.entity';
import { CreateExperienceInput } from './dto/create-experience.input';
import { UpdateExperienceInput } from './dto/create-experience.input';

@Resolver(() => Experience)
export class ExperienceResolver {
  constructor(private experienceService: ExperienceService) {}

  @Query(() => [Experience])
  async getExperiences(): Promise<Experience[]> {
    return this.experienceService.findAll();
  }

  @Query(() => Experience)
  async getExperience(@Args('id') id: number): Promise<Experience> {
    return this.experienceService.findOne(id);
  }

  @Mutation(() => Experience)
  async addExperience(
    @Args('input') input: CreateExperienceInput,
  ): Promise<Experience> {
    return this.experienceService.create(input);
  }

  @Mutation(() => Boolean)
  async deleteExperience(@Args('id') id: number): Promise<boolean> {
    return this.experienceService.remove(id);
  }

  @Mutation(() => Experience)
  async updateExperience(
    @Args('updateExperienceInput') updateExperienceInput: UpdateExperienceInput,
  ): Promise<Experience> {
    return this.experienceService.update(updateExperienceInput);
  }
}
