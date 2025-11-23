import { useSelectedLesson } from "@/entities/course/models/course.hooks";
import AddTestSection from "./test/AddTestSection";
import { useTestQuestions } from "@/entities/course-test/models/course-test.hooks";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";
import { loadQuestions } from "@/entities/course-test/models/course-test.slice";
import { TestQuestion } from "@/entities/course/course.types";
import QuestionCard from "./test/QuestionCard";

export default function TestContent() {
  const lesson = useSelectedLesson();
  const dispatch = useAppDispatch();

  const questions = useTestQuestions();

  useEffect(() => {
    if (lesson === "main") return;
    dispatch(
      loadQuestions({
        lessonId: lesson.id,
        questions: lesson.test?.questions,
      })
    );
  }, [lesson]);
  if (lesson === "main") return null;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 ">
        <h2 className="text-lg font-bold text-neutral-700 text-center">Вопросы</h2>
        <div className="flex flex-col gap-2 items-center ">
          {questions.map((q) => (
            <QuestionCard question={q} key={q.id} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <AddTestSection />
      </div>
    </div>
  );
}
