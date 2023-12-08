import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { SkillService } from './skills.service';
import { Skill } from './entities/skill.entity';
import { CreateSkillInput } from './dto/create-skill.input';
import { CreateSkillsInput } from './dto/create-skill.input';

@Resolver(() => Skill)
export class SkillResolver {
  constructor(private skillsService: SkillService) {}

  @Query(() => [Skill])
  async getSkills(): Promise<Skill[]> {
    return this.skillsService.findAll();
  }

  @Query(() => Skill)
  async getSkill(@Args('id') id: number): Promise<Skill> {
    return this.skillsService.findOne(id);
  }

  @Mutation(() => Skill)
  async addSkill(@Args('input') input: CreateSkillInput): Promise<Skill> {
    return this.skillsService.create(input);
  }

  @Mutation(() => Boolean)
  async deleteSkill(@Args('id') id: number): Promise<boolean> {
    return this.skillsService.remove(id);
  }

  @Mutation(() => [Skill])
  async addSkills(@Args('input') input: CreateSkillsInput): Promise<Skill[]> {
    return this.skillsService.createMany(input.skills);
  }
}
