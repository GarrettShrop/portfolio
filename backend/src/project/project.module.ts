import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Skill } from '../skills/entities/skill.entity'; // Import Skill entity
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project, Skill]), // Include both Project and Skill entities
  ],
  providers: [ProjectService, ProjectResolver],
})
export class ProjectModule {}
