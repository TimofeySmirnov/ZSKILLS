import { PrismaService } from '@/src/core/prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegistrationDTO } from './dto/registration.dto';
import { hash, verify } from 'argon2';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '../jwt/jwt.service';
import { SubscriptionService } from '../subscription/subscription.service';
import { User } from '@/prisma/generated';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaServiсe: PrismaService,
    private readonly jwtUtils: JwtService,
    private readonly subscriptionService: SubscriptionService,
  ) {}

  clearPasswordToRes(user: User) {
    const {password, subscriptionHistoryId, email, phoneNumber, ...other} = user
    return other
  }

  async registration(data: RegistrationDTO) {
    const { email, password, phoneNumber, firstName, lastName } = data;
    const checkEmail = await this.prismaServiсe.user.findUnique({
      where: {
        email,
      },
    });
    if (checkEmail) {
      throw new BadRequestException(
        'Аккаунт с такой почтой уже зарегестрирован',
      );
    }
    const checkPhone = await this.prismaServiсe.user.findUnique({
      where: {
        phoneNumber,
      },
    });
    if (checkPhone) {
      throw new BadRequestException(
        'Аккаунт с таким номером телефона уже зарегестрирован',
      );
    }
    const hashedPassword = await hash(password);
    const createUser = await this.prismaServiсe.user.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        email,
        password: hashedPassword,
      }
    });
    const token = this.jwtUtils.signToken(createUser.id);
    await this.subscriptionService.addDefaultSubscribtion(createUser.id)
    const currentSub = await this.subscriptionService.getMyCurrentSubscribtion(createUser.id)

    return { token, user: this.clearPasswordToRes(createUser), sub: currentSub };
  }

  async login(data: LoginDTO) {
    const { login, password } = data;
    const findUser = await this.prismaServiсe.user.findFirst({
      where: {
        OR: [{ email: { equals: login } }, { phoneNumber: { equals: login } }],
      }
    });
    if (!findUser) {
      throw new NotFoundException('Пользователь не найден');
    }
    const complarePassword = await verify(findUser.password, password);
    if (!complarePassword) {
      throw new UnauthorizedException('Введен неверный пароль');
    }
    const token = this.jwtUtils.signToken(findUser.id);
    const currentSub = await this.subscriptionService.getMyCurrentSubscribtion(findUser.id)
    return { token, user: this.clearPasswordToRes(findUser), sub: currentSub};
  }

  async refresh(userId: string) {
    const findUser = await this.prismaServiсe.user.findUnique({where: {
      id: userId
    }})
    if(!findUser) throw new InternalServerErrorException('Ошибка сервера')
    const clearUser = this.clearPasswordToRes(findUser)
    const sub =  await this.subscriptionService.getMyCurrentSubscribtion(userId)
    return {user: clearUser, sub}
  }
}
