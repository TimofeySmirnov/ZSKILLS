import { PrismaService } from '@/src/core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/CreateLesson.dto';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { ChangeLessonTestType, UpdateQuestionType } from './lesson.types';
import { Prisma, PrismaClient, TestQuestion } from '@/prisma/generated';
import { CreateWebinarDto } from './dto/CreateWebinar.dto';

@Injectable()
export class LessonService {
  constructor(private readonly prisma: PrismaService) {}

  async createLesson(unitId: string, data: CreateLessonDto) {
    const lastOrderIndexLesson = await this.prisma.lesson.findFirst({
      where: {
        courseUnitId: unitId,
      },
      orderBy: {
        orderIndex: 'desc',
      },
    });
    const nextOrderIndex = lastOrderIndexLesson
      ? lastOrderIndexLesson.orderIndex + 1
      : 1;
    return await this.prisma.lesson.create({
      data: {
        ...data,
        courseUnitId: unitId,
        orderIndex: nextOrderIndex,
      },
    });
  }

  async updateLesson(id: string, data: CreateLessonDto) {
    return await this.prisma.lesson.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async deleteLesson(id: string) {
    await this.prisma.lesson.delete({
      where: {
        id,
      },
    });
    return true;
  }

  async getOrCreateLessonTest(
    id: string,
    tx?: PrismaClient | Prisma.TransactionClient,
  ) {
    const res = await this.prisma.lessonTest.findFirst({
      where: {
        lessonId: id,
      },
    });
    if (!res) {
      const newTest = await this.prisma.lessonTest.create({
        data: {
          lessonId: id,
        },
      });
      return newTest;
    }
    return res;
  }

  async addQuestion(lessonId: string, data: CreateQuestionDto) {
    const lesosnTest = await this.getOrCreateLessonTest(lessonId);

    return await this.prisma.testQuestion.create({
      data: {
        ...data,
        testId: lesosnTest.id,
      },
    });
  }

  async updateQuestion(id: string, data: CreateQuestionDto) {
    return await this.prisma.testQuestion.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async deleteQuestion(id: string) {
    return await this.prisma.testQuestion.delete({
      where: {
        id,
      },
    });
  }

  async addQuestions(
    lessonId: string,
    data: CreateQuestionDto[],
    tx: PrismaClient | Prisma.TransactionClient,
  ) {
    const lesosnTest = await this.getOrCreateLessonTest(lessonId, tx);

    const dataToCreate = data.map((i) => {
      return { ...i, testId: lesosnTest.id };
    });
    await tx.testQuestion.createMany({
      data: dataToCreate,
    });
    return true;
  }

  async updateQuestions(
    data: UpdateQuestionType[],
    tx: PrismaClient | Prisma.TransactionClient,
  ) {
    for (const i of data) {
      await tx.testQuestion.update({
        where: {
          id: i.id,
        },
        data: {
          ...i.data,
        },
      });
    }
  }

  async deleteQuestions(
    ids: string[],
    tx: PrismaClient | Prisma.TransactionClient,
  ) {
    for (const id of ids) {
      await tx.testQuestion.delete({
        where: {
          id,
        },
      });
    }
  }

  async changeLessonTest(lessonId: string, data: ChangeLessonTestType) {
    await this.prisma.$transaction(async (tx) => {
      await this.addQuestions(lessonId, data.newQuestions, tx);
      await this.updateQuestions(data.updated, tx);
      await this.deleteQuestions(data.delete, tx);
    });
  }

  async getWebinarInfo(lessonId: string) {
    return await this.prisma.lessonWebinar.findFirst({
      where: {
        lessonId,
      },
    });
  }

  async addWebinarInfo(lessonId: string, data: CreateWebinarDto) {
    return await this.prisma.lessonWebinar.create({
      data: {
        ...data,
        lessonId,
      },
    });
  }

  async updateWebinarInfo(id: string, data: CreateWebinarDto) {
    return await this.prisma.lessonWebinar.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async deleteWebinarInfo(id: string) {
    return await this.prisma.lessonWebinar.delete({
      where: {
        id,
      },
    });
  }

  async changeLessonContent(id: string, content: any) {
    return await this.prisma.lesson.update({
      where: {
        id,
      },
      data: {
        content,
      },
    });
  }
}
