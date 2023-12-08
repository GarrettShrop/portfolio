import { Injectable } from '@nestjs/common';
import { Skill } from './entities/skill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSkillInput } from './dto/create-skill.input';
import { Repository } from 'typeorm';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private skillsRepository: Repository<Skill>,
  ) {}

  findAll(): Promise<Skill[]> {
    return this.skillsRepository.find();
  }

  findOne(id: number): Promise<Skill> {
    return this.skillsRepository.findOne({ where: { id: id } });
  }

  create(input: any): Promise<Skill> {
    return this.skillsRepository.save(input);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.skillsRepository.delete(id);
    return result.affected > 0;
  }

  async createMany(createSkillInputs: CreateSkillInput[]): Promise<Skill[]> {
    const skills = createSkillInputs.map((input) => {
      const skill = new Skill();
      skill.skillName = input.skillName;
      skill.level = input.level;
      return skill;
    });

    return this.skillsRepository.save(skills); // Assuming you have a skill repository
  }
}
