import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateEducationInput } from './dto/create-educations.input';
import { Education } from './entities/education.entity';

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(Education)
    private educationRepository: Repository<Education>,
  ) {}

  findAll(): Promise<Education[]> {
    return this.educationRepository.find();
  }

  findOne(id: number): Promise<Education> {
    return this.educationRepository.findOne({ where: { id: id } });
  }

  create(input: any): Promise<Education> {
    return this.educationRepository.save(input);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.educationRepository.delete(id);
    return result.affected > 0;
  }

  async update(updateEducationInput: UpdateEducationInput): Promise<Education> {
    const { id, ...updateData } = updateEducationInput;
    await this.educationRepository.update(id, updateData);
    return this.educationRepository.findOne({
      where: { id },
    });
  }
}
