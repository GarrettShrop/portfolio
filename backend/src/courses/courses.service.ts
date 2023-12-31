import { Injectable } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCourseInput } from './dto/create-courses.input';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  findAll(): Promise<Course[]> {
    return this.coursesRepository.find();
  }

  findOne(id: number): Promise<Course> {
    return this.coursesRepository.findOne({ where: { id: id } });
  }

  create(input: any): Promise<Course> {
    return this.coursesRepository.save(input);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.coursesRepository.delete(id);
    return result.affected > 0;
  }

  async update(updateCourseInput: UpdateCourseInput): Promise<Course> {
    const { id, ...updateData } = updateCourseInput;
    await this.coursesRepository.update(id, updateData);
    return this.coursesRepository.findOne({
      where: { id },
    });
  }
}
