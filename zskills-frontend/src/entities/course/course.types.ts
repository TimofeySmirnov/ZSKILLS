

export type CourseDto = {
  name: string;
  description?: string;
};

export type UnitDto = {
  name: string;
  description?: string;
};

export type CoureseOnlyType = {
  id: string;
  name: string;
  description: string | null;
  preview: string | null;
};

export enum LESSON_TYPES {
  lecture = "lecture",
  test = "test",
  webinar = "webinar",
}

export type Course = {
  id: string;
  name: string;
  description?: string | null;
  preview?: string | null;
  userId: string;
  courseUnits: CourseUnit[];
};

export type CourseUnit = {
  id: string;
  courseId: string;
  name: string;
  description?: string | null;
  orderIndex: number;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  name: string;
  lessonType: LESSON_TYPES;
  content?: any | null;
  courseUnitId: string;
  test?: LessonTest | null;
  orderIndex: number;
};

export type LessonTest = {
  id: string;
  lessonId: string;
  questions: TestQuestion[];
};

export type TestQuestion = {
  id: string;
  question: string;
  type: TEST_TYPES;
  answers: Record<string, AnswerType>;
  testId: string;
};

export type AnswerFormServerType = {
  id: string 
} & AnswerType

export type TestQuestionWithArraAnswers = {
  id: string;
  question: string;
  type: TEST_TYPES;
  answers: AnswerFormServerType[];
  testId: string;
  status: testStatuses
}

export type testStatuses = 'exist' | 'new' | 'updated' | 'delete'

export type TestQuestionWithType = {
  status: testStatuses
} & TestQuestion

export type AnswerType = {
    answer: string
    isCorrect: boolean
    orderIndex: number
}

export enum TEST_TYPES {
  single = "single",
  multiple = "multiple",
}

export enum TestTypesTranslated {
  "single" = "Один вариант ответа",
  "multiple" = "Много вариантов ответа",
}
