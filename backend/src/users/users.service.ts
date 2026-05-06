import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(data: {
  email: string;
  username: string;
  password_hash: string;
  }) {
    return this.prisma.user.create({
      data,
    });
  }
}