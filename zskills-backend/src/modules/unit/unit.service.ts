import { PrismaService } from '@/src/core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UnitDto } from './dto/unit.dto';

@Injectable()
export class UnitService {
    constructor(private readonly prismaServive: PrismaService) {}

    async createUnit(courseId: string, data: UnitDto) {
        const getPreviewOrderIndex = await this.prismaServive.courseUnit.findFirst({
            where: {
                courseId
            }
        })
        const newOrderIndex = getPreviewOrderIndex ? getPreviewOrderIndex.orderIndex + 1 : 1
        return await this.prismaServive.courseUnit.create({
            data: {
                ...data,
                courseId,
                orderIndex: newOrderIndex
            }
        })
    }

    async deleteUnit(unitId: string) {
        await this.prismaServive.courseUnit.delete({
            where: {
                id: unitId
            }
        })
        return true
    }
}
