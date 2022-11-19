import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { UsersService } from '../service/users-service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async post(@Body() userDTO: CreateUserDto) {
    return this.usersService.createUser(userDTO);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Get('/dummy/:id')
  findDummyId(@Param('id') id: string) {
    return this.usersService.dummyService(id);
  }

  @Put(':id')
  @HttpCode(201)
  update(@Param('id') id: string, @Body() updateDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(201)
  async delete(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
