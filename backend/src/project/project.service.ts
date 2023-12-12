import { Injectable } from '@nestjs/common';
import { Project } from './entities/project.entity';
import { Skill } from '../skills/entities/skill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateProjectInput,
  UpdateProjectInput,
} from './dto/create-project.input';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,
  ) {}

  findAll(): Promise<Project[]> {
    return this.projectRepository.find({ relations: ['skills'] });
  }

  findOne(id: number): Promise<Project> {
    return this.projectRepository.findOne({ where: { id: id } });
  }

  async create(input: CreateProjectInput): Promise<Project> {
    const project = new Project();
    project.name = input.name;
    project.duration = input.duration;
    project.description = input.description;
    project.role = input.role;
    project.teamSize = input.teamSize;

    // Handle the skills association
    if (input.skillNames && input.skillNames.length > 0) {
      project.skills = await this.findOrCreateSkills(input.skillNames);
    }

    return this.projectRepository.save(project);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.projectRepository.delete(id);
    return result.affected > 0;
  }

  async update(updateProjectInput: UpdateProjectInput): Promise<Project> {
    const { id, skillNames, ...updateData } = updateProjectInput;
    const project = await this.projectRepository.findOne({
      where: { id },
      relations: ['skills'],
    });

    if (!project) {
      throw new Error('Project not found');
    }

    Object.assign(project, updateData);

    if (skillNames) {
      project.skills = await this.findOrCreateSkills(skillNames);
    }

    return this.projectRepository.save(project);
  }

  private async findOrCreateSkills(skillNames: string[]): Promise<Skill[]> {
    const skills = [];
    for (const name of skillNames) {
      const skill = await this.skillRepository.findOne({
        where: { skillName: name },
      });
      if (!skill) {
        // Skill not found - handle this case appropriately
        // For example, throw an error or return a special response
        throw new Error(
          `Skill not found: ${name}. Please add this skill first.`,
        );
      }
      skills.push(skill);
    }
    return skills;
  }
}
