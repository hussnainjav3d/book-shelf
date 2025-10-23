import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Department } from './entities/department.entity';
import { Email } from './entities/email.entity';
import { UsersController } from './users.controller';
import { Phone } from './entities/phone.entity';

@Module({
  imports: [SequelizeModule.forFeature([User, Department, Email, Phone])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
