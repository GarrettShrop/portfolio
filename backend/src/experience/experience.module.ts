import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experience } from './entities/experience.entity';
import { ExperienceService } from './experience.service';
import { ExperienceResolver } from './experience.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Experience])],
  providers: [ExperienceService, ExperienceResolver],
})
export class ExperienceModule {}
