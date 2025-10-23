import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // Controller methods would go here
  constructor(private readonly usersService: UsersService) {}
  @Get('/')
  async findAll() {
    const users = await this.usersService.findAll();
    console.log(users);
    return users;
    // This would call the UsersService to get all users
  }
}
