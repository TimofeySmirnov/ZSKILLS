import { PrismaService } from '@/src/core/prisma/prisma.service';
import { Injectable, InternalServerErrorException, OnModuleInit } from '@nestjs/common';
import tariffsData, { TariffNames } from './data/tariff.data';

@Injectable()
export class TariffService implements OnModuleInit {
    constructor(private readonly prismaService: PrismaService) {}

    async onModuleInit() {
        const checkExistingCourses = await this.prismaService.tariffPlan.findFirst({
            where: {
                name: TariffNames.BASIC
            }
        })
        if(checkExistingCourses) return
        await this.prismaService.tariffPlan.createMany({
            data: tariffsData
        })
        return
    }

    async getTarifById(id: string) {
        return await this.prismaService.tariffPlan.findUnique({
            where: {
                id
            }
        })
    }

    getTarifByName(tarifName: string) {
        const tarif = tariffsData.find(el => el.name === tarifName)
        if(!tarif) throw new InternalServerErrorException('Ошибка сервера')
        return tarif
    }

    async getIdTarif(tarif: string) {
        const result = await this.prismaService.tariffPlan.findFirst({
            where: {
                name: tarif
            }
        })
        if(!result){
            throw new InternalServerErrorException('Тариф не найден')
        }
        return result.id
    }

    async getAllTariffes() {
        return this.prismaService.tariffPlan.findMany()
    }
}
