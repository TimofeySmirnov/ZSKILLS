import { TEST_TYPES } from '@/prisma/generated';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { AnswerType } from '../lesson.types';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'Вопрос обязателен' })
  @IsString({ message: 'Вопрос должен быть строкой' })
  question: string;

  @IsNotEmpty({message: 'Ответы обязательны'})
  answers: AnswerType[];

  @IsNotEmpty({message: 'Тип теста обязателен'})
  type: TEST_TYPES;

  @IsNotEmpty({message: 'Номер вопроса обязателен'})
  @IsNumber({}, {message: 'Номер вопроса должен быть числом'})
  orderIndex: number
}
