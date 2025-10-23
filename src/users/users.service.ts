import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import type { Repository } from 'sequelize-typescript';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll({
      include: { all: true },
    });
  }
}
