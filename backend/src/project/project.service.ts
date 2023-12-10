import { Injectable } from '@nestjs/common';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProjectInput } from './dto/create-project.input';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  findOne(id: number): Promise<Project> {
    return this.projectRepository.findOne({ where: { id: id } });
  }

  create(input: any): Promise<Project> {
    return this.projectRepository.save(input);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.projectRepository.delete(id);
    return result.affected > 0;
  }

  async update(updateProjectInput: UpdateProjectInput): Promise<Project> {
    const { id, ...updateData } = updateProjectInput;
    await this.projectRepository.update(id, updateData);
    return this.projectRepository.findOne({
      where: { id },
    });
  }
}
