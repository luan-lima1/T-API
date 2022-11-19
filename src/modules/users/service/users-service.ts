import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { hash } from 'bcryptjs';
import axiosService from 'src/config/axios-config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(data: CreateUserDto) {
    const existEmail = await this.userRepository.findOne({
      where: {
        email: data.email,
      },
    });
    if (existEmail) {
      throw new HttpException(
        'Usuário já Cadastrado no Sistema',
        HttpStatus.NOT_FOUND,
      );
    }
    const cryptPass = await hash(data.password, 8);
    const newUser = this.userRepository.create({
      ...data,
      password: cryptPass,
    });

    await this.userRepository.save(newUser);
    return newUser;
  }

  async findById(id: string) {
    const getId = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (getId) {
      return getId;
    }
    throw new HttpException(
      'Usuário não encontrado no sistema',
      HttpStatus.NOT_FOUND,
    );
  }

  async updateUser(id: string, update: UpdateUserDto) {
    const updatedUser = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!updatedUser) {
      throw new HttpException(
        'Usuário não encontrado no sistema',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.userRepository.update(id, update);
  }

  async deleteUser(id: string) {
    const userOn = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!userOn) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
    await this.userRepository.delete({ id: userOn.id });
  }

  async dummyService(id: string) {
    const axiosInstance = axiosService('https://dummyjson.com/');
    try {
      const { data } = await axiosInstance.get(`users/${id}`);
      return data;
    } catch (error) {
      throw new HttpException('error', error);
    }
  }
}
