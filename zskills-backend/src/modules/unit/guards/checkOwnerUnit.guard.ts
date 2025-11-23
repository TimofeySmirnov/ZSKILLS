import { PrismaService } from '@/src/core/prisma/prisma.service';
import { CanActivate, ExecutionContext, ForbiddenException, InternalServerErrorException } from '@nestjs/common';

export class checkOwnerUnit implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
      const req = context.switchToHttp().getRequest()
      const unit = req.unit
      const {id} = req.user
      const findCourse = await this.prismaService.course.findFirst({
        where: {
            id: unit.courseId
        }
      })
      if(!findCourse) {
        throw new InternalServerErrorException('Ошибка проверки безопасности')
      }
      if(findCourse.userId !== id) {
        throw new ForbiddenException('Вы не можете редактировать не ваши модули')
      }
      return true
  }
}
