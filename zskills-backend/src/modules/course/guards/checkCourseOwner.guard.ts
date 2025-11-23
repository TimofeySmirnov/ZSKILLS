import { PrismaService } from '@/src/core/prisma/prisma.service';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class CheckCourseOwner implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const userId = req.user.id;
    const course = req.course;
    if (course.userId !== userId) {
      throw new ForbiddenException('Вы не можете редактировать этот курс');
    }
    return true;
  }
}
