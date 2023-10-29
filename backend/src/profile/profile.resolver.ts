import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';
import { CreateProfileInput } from './dto/create-profile.input';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private profileService: ProfileService) {}

  @Query(() => [Profile])
  async getProfiles(): Promise<Profile[]> {
    return this.profileService.findAll();
  }

  @Query(() => Profile)
  async getProfile(@Args('id') id: number): Promise<Profile> {
    return this.profileService.findOne(id);
  }

  @Mutation(() => Profile)
  async addProfile(@Args('input') input: CreateProfileInput): Promise<Profile> {
    return this.profileService.create(input);
  }

  @Mutation(() => Boolean)
  async deleteProfile(@Args('id') id: number): Promise<boolean> {
    return this.profileService.remove(id);
  }
}
