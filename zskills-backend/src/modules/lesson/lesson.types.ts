import { TestQuestion } from '@/prisma/generated';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';

export type AnswerType = {
  answer: string;
  isCorrect: boolean;
  orderIndex: number
};

export type UpdateQuestionType = {
    id: string
    data: CreateQuestionDto
}

export type ChangeLessonTestType = {
  newQuestions: CreateQuestionDto[];
  updated: UpdateQuestionType[];
  exist: TestQuestion[];
  delete: string[];
};
