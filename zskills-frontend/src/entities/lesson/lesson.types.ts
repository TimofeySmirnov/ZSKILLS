import { AnswerType, LESSON_TYPES, TEST_TYPES, TestQuestion } from "../course/course.types";

export enum LessonTypes {
  lecture = "Лекция",
  test = "Тест",
  webinar = "Вебинар",
}

export type CreateLessonDto = {
  name: string;
  lessonType: LessonTypes;
};

export type CreateQuestionDto = {
   question: string;
   answers: AnswerType[]
   type: TEST_TYPES;
   orderIndex: number
}

export type thunkCreateLessonType = {
    id: string,
    data: CreateLessonDto
}

export type UpdateQuestionType = {
  id: string,
  data: CreateQuestionDto
}

export type ChangeLessonTestType = {
  newQuestions: CreateQuestionDto[];
  updated: UpdateQuestionType[];
  exist: TestQuestion[];
  delete: string[];
};

export type CreateWebinarDto = {
  link: string
  connectTime: string;
  description?: string;
}

export type WebinarType = {
  id: string,
  lessonId: string
} & CreateWebinarDto