import { Injectable } from '@nestjs/common';
import { Experience } from './entities/experience.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateExperienceInput } from './dto/create-experience.input';
import { Repository } from 'typeorm';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectRepository(Experience)
    private experienceRepository: Repository<Experience>,
  ) {}

  findAll(): Promise<Experience[]> {
    return this.experienceRepository.find();
  }

  findOne(id: number): Promise<Experience> {
    return this.experienceRepository.findOne({ where: { id: id } });
  }

  create(input: any): Promise<Experience> {
    return this.experienceRepository.save(input);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.experienceRepository.delete(id);
    return result.affected > 0;
  }

  async update(
    updateExperienceInput: UpdateExperienceInput,
  ): Promise<Experience> {
    const { id, ...updateData } = updateExperienceInput;
    await this.experienceRepository.update(id, updateData);
    return this.experienceRepository.findOne({
      where: { id },
    });
  }
}
