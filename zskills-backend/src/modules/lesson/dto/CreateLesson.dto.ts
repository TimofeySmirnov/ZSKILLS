import { LESSON_TYPES } from '@/prisma/generated';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLessonDto {
  @IsNotEmpty({ message: 'Название обязательно' })
  @IsString({ message: 'Название должно быть строкой' })
  name: string;

  @IsNotEmpty({ message: 'Тип урока обязателен' })
  lessonType: LESSON_TYPES;
}
