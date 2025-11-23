import { PrismaService } from '@/src/core/prisma/prisma.service';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class CheckExistCourse implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const { id } = req.params;

    const record = await this.prismaService.course.findUnique({
      where: {
        id,
      },
    });

    if (!record) {
      throw new NotFoundException('Курс не найден');
    }
    req.course = record
    return true;
  }
}
