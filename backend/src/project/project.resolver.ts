import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query(() => [Project])
  async getProjects(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Query(() => Project)
  async getProject(@Args('id') id: number): Promise<Project> {
    return this.projectService.findOne(id);
  }

  @Mutation(() => Project)
  async addProject(@Args('input') input: CreateProjectInput): Promise<Project> {
    return this.projectService.create(input);
  }

  @Mutation(() => Boolean)
  async deleteProject(@Args('id') id: number): Promise<boolean> {
    return this.projectService.remove(id);
  }
}
