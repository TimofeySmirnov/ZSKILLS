"use client";

import Button from "@/shared/ui/Button";
import { useSelectedLesson } from "../../models/course.hooks";
import { useAppDispatch } from "@/store/store";
import { deleteLesson } from "../../models/course.slice";

type AppointDeleteLessonProps = {
  onClose: () => void;
};

export default function AppointDeleteLesson({
  onClose,
}: AppointDeleteLessonProps) {
  const lesson = useSelectedLesson();
  const dispatch = useAppDispatch();
  if (lesson === "main") {
    onClose();
    return null;
  }
  const handleDelete = () => {
    dispatch(deleteLesson(lesson.id));
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl text-neutral-700">
        Вы действительно хотите удалить урок:{" "}
        <span className="font-bold">{lesson.name}</span>?
      </h1>
      <div className="flex flex-col gap-2">
        <Button title="Отмена" onClick={onClose} mode="darkgreen" />
        <Button title="Удалить" hover="red" onClick={handleDelete} />
      </div>
    </div>
  );
}
