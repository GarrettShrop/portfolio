import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { CourseService } from './courses.service';
import { Course } from './entities/courses.entity';
import { CreateCourseInput } from './dto/create-courses.input';

@Resolver(() => Course)
export class CourseResolver {
  constructor(private coursesService: CourseService) {}

  @Query(() => [Course])
  async getCourses(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Query(() => Course)
  async getCourse(@Args('id') id: number): Promise<Course> {
    return this.coursesService.findOne(id);
  }

  @Mutation(() => Course)
  async addCourse(@Args('input') input: CreateCourseInput): Promise<Course> {
    return this.coursesService.create(input);
  }

  @Mutation(() => Boolean)
  async deleteCourse(@Args('id') id: number): Promise<boolean> {
    return this.coursesService.remove(id);
  }
}
