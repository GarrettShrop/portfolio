import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';
import { ProjectModule } from './project/project.module';
import { EducationModule } from './education/education.module';
import { Profile } from './profile/entities/profile.entity';
import { Project } from './project/entities/project.entity';
import { Education } from './education/entities/education.entity';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/database/portfolio.db',
      entities: [Profile, Project, Education], // Added the entities here
      synchronize: true,
    }),
    ProfileModule,
    ProjectModule,
    EducationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
