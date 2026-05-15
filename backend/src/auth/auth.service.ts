import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(dto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return this.usersService.createUser({
      email: dto.email,
      username: dto.username,
      password_hash: hashedPassword,
    });
  }

  async login(dto: LoginDto) {
    
    const user = await this.usersService.findByEmail(dto.email);

    if (!user || !user.password_hash)
      throw new UnauthorizedException();

    const isValid = await bcrypt.compare(dto.password, user.password_hash);

    if (!isValid)
      throw new UnauthorizedException('Invalid credentials');

  return {
      message: 'Login successful',
      userId: user.id,
      email: user.email,
    };
  }
}