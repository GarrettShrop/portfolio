import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/courses.entity';
import { CourseService } from './courses.service';
import { CourseResolver } from './courses.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseService, CourseResolver],
})
export class CourseModule {}
