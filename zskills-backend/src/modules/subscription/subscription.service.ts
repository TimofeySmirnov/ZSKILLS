import { PrismaService } from '@/src/core/prisma/prisma.service';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { TariffService } from '../tariff/tariff.service';
import { TariffNames } from '../tariff/data/tariff.data';
import addDays from '@/src/shared/utils/addDays.util';

@Injectable()
export class SubscriptionService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly tariffService: TariffService,
  ) {}

  async addSelectedSubscribtion(tarif: string, userId: string) {
    const tarifId = await this.tariffService.getIdTarif(tarif);
    const tarifStats = this.tariffService.getTarifByName(tarif);
    const startDate = new Date();
    const endDate = addDays(startDate, tarifStats.duration)
    const addSubscribtion = await this.prismaService.subscription.create({
        data: {
            userId: userId,
            tarifPlanId: tarifId,
            createdAt: startDate,
            dateEnd: endDate,
            isActive: true
        }
    })
    return addSubscribtion
  }

  async addDefaultSubscribtion(userId: string) {
    await this.addSelectedSubscribtion(TariffNames.TRIAL, userId);
  }

  async getMyCurrentSubscribtion(userId: string) {
    const sub = await this.prismaService.subscription.findFirst({
      where: {
        userId,
      },
      select: {
        id: true,
        createdAt: true,
        dateEnd: true,
        tarifPlanId: true,
        isActive: true,
        userId: true,
        tarifPlan: true
      },
      take: 1,
      orderBy: {
        createdAt: 'desc'
      }
    })
    if(!sub) throw new InternalServerErrorException('Ошибка сервера')
    return sub
  }

  async getMaxCountOfCourses(userId: string) {
    const getSubscribe = await this.prismaService.subscription.findFirst({
      where: {
        userId
      }
    })
    if(!getSubscribe) return 0
    const getMaxCourses = await this.tariffService.getTarifById(getSubscribe.tarifPlanId)
    if(!getMaxCourses) return 0
    return getMaxCourses.maxCourses
  }
}
