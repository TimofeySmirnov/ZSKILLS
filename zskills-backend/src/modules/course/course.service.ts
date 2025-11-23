import { PrismaService } from '@/src/core/prisma/prisma.service';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CousreDto } from './dto/course.dto';
import { SubscriptionService } from '../subscription/subscription.service';

@Injectable()
export class CourseService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly subscriptionService: SubscriptionService,
  ) {}

  async getCountCorses(userId: string) {
    const courses = await this.prismaService.course.findMany({
      where: {
        userId,
      },
    });
    return courses.length;
  }

  async getAllCourses(userId: string, name?: string) {
    return await this.prismaService.course.findMany({
      where: {
        userId,
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
  }

  async getLessonById(id: string) {
    const lesson = await this.prismaService.lesson.findFirst({
      where: {
        id,
      },
      include: {
        test: {},
      },
    });
  }

  async getCourseById(userId: string, id: string) {
    const findCourse = await this.prismaService.course.findFirst({
      where: {
        id: id,
      },
      include: {
        courseUnits: {
          orderBy: {
            orderIndex: 'asc',
          },
          include: {
            lessons: {
              orderBy: {
                orderIndex: 'asc',
              },
              include: {
                test: {
                  include: {
                    questions: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!findCourse) {
      throw new NotFoundException('Курс не найден');
    }
    if (findCourse.userId !== userId) {
      throw new ForbiddenException('Нет доступа');
    }
    return findCourse;
  }

  async createCourse(userId: string, data: CousreDto) {
    const countCourseExist = await this.getCountCorses(userId);
    const getMaxCourses =
      await this.subscriptionService.getMaxCountOfCourses(userId);
    if (countCourseExist >= getMaxCourses) {
      throw new ForbiddenException('У вас закончился лимит на создание курсов');
    }
    const result = await this.prismaService.course.create({
      data: {
        ...data,
        userId,
      },
    });
    return result;
  }

  async updateCourse(courseId: string, data: CousreDto) {
    return await this.prismaService.course.update({
      where: {
        id: courseId,
      },
      data: data,
    });
  }

  async deleteCourse(courseId: string) {
    await this.prismaService.course.delete({
      where: {
        id: courseId,
      },
    });
    return true;
  }
}
