import { PrismaService } from '@/src/core/prisma/prisma.service';
import { CanActivate, ExecutionContext, Injectable, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class CheckExistUnit implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
      const req = context.switchToHttp().getRequest()
      const {id} = req.params
      const findUnit = await this.prismaService.courseUnit.findUnique({
        where: {
            id
        }
      })
      if(!findUnit) {
        throw new NotFoundException('Модуль не найден')
      }
      req.unit = findUnit
      return true
  }
}
