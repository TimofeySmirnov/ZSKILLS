import { useState } from "react";
import { CourseUnit, Lesson } from "../../course.types";
import { ChevronDown } from "lucide-react";
import Button from "@/shared/ui/Button";
import Modal from "@/shared/ui/Modal";
import AddLessonForm from "../forms/AddLessonForm";
import { useAppDispatch } from "@/store/store";
import { setLesson } from "../../models/course.slice";
import { LessonTypes } from "@/entities/lesson/lesson.types";
import { loadQuestions } from "@/entities/course-test/models/course-test.slice";

export default function UnitBlock({ u }: { u: CourseUnit }) {
  const [lessonOpen, setLessonOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const clickToLesson = (l: Lesson) => {
    dispatch(setLesson(l));
    if (l.test?.questions) {
      dispatch(loadQuestions({ lessonId: l.id, questions: l.test.questions }));
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={() => setLessonOpen(!lessonOpen)}
        className="flex justify-between items-center select-none hover:cursor-pointer"
      >
        <h2 className="break-normal  font-semibold text-neutral-700">
          {u.name}
        </h2>
        <ChevronDown
          stroke="#525252"
          className={`${lessonOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      {lessonOpen && u.lessons && (
        <div className="flex flex-col gap-1">
          {u?.lessons.map((i) => (
            <div
              key={i.id}
              className="px-2 hover:cursor-pointer border border-transparent hover:border-emerald-400 rounded-lg flex flex-col "
              onClick={() => clickToLesson(i)}
            >
              <h3 className="text-base break-normal font-semibold text-neutral-600">
                {i.name}
              </h3>
              <span className="text-emerald-400 text-sm font-semibold">
                {LessonTypes[i.lessonType]}
              </span>
            </div>
          ))}
        </div>
      )}
      {lessonOpen && (
        <div>
          <Button
            title="Добавить урок"
            paddings="small"
            mode="darkgreen"
            onClick={() => setOpen(true)}
          />
        </div>
      )}
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <AddLessonForm onClose={() => setOpen(false)} id={u.id} />
        </Modal>
      )}
    </div>
  );
}
