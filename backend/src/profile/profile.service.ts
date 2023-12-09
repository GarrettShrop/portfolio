import { Injectable } from '@nestjs/common';
import { Profile } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProfileInput } from './dto/create-profile.input';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  findOne(id: number): Promise<Profile> {
    return this.profileRepository.findOne({ where: { id: id } });
  }

  create(input: any): Promise<Profile> {
    return this.profileRepository.save(input);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.profileRepository.delete(id);
    return result.affected > 0;
  }

  async update(updateProfileInput: UpdateProfileInput): Promise<Profile> {
    const { id, ...updateData } = updateProfileInput;
    await this.profileRepository.update(id, updateData);
    return this.profileRepository.findOne({
      where: { id },
    });
  }
}
