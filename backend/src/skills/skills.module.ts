import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './entities/skill.entity';
import { SkillService } from './skills.service';
import { SkillResolver } from './skills.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  providers: [SkillService, SkillResolver],
})
export class SkillsModule {}
