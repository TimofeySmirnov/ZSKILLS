"use client";

import { LessonTypes } from "@/entities/lesson/lesson.types";
import { useSelectedLesson } from "../../models/course.hooks";
import React, { useState } from "react";
import { BookMarked, NotebookPen, Video } from "lucide-react";
import { LESSON_TYPES } from "../../course.types";
import Button from "@/shared/ui/Button";
import Modal from "@/shared/ui/Modal";
import AddLessonForm from "../forms/AddLessonForm";
import AppointDeleteLesson from "./AppointDeleteLesson";
import LectureContent from "./courseContent/LectureContent";
import TestContent from "./courseContent/TestContent";
import WebinarContent from "./courseContent/WebinarContent";

const iconsOnLessonType: Record<LESSON_TYPES, React.ReactNode> = {
  lecture: <BookMarked stroke="#34D399" />,
  test: <NotebookPen stroke="#34D399" />,
  webinar: <Video stroke="#34D399" />,
};

const LessonContents: Record<LESSON_TYPES, () => React.ReactNode> = {
  lecture: () => <LectureContent />,
  test: () => <TestContent />,
  webinar: () => <WebinarContent />,
};

export default function LessonPage() {
  const lesson = useSelectedLesson();
  const [update, setUpdate] = useState(false);
  const [del, setDel] = useState(false);
  if (lesson === "main") return null;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-2">
        <div>
          <h2 className="text-neutral-700 font-bold text-2xl">{lesson.name}</h2>
          <div className="flex gap-1 items-center">
            {iconsOnLessonType[lesson.lessonType]}
            <span className="text-emerald-400 text-lg font-semibold">
              {LessonTypes[lesson.lessonType]}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            title="Редактировать"
            width="inline"
            mode="darkgreen"
            onClick={() => setUpdate(true)}
          />
          <Button
            title="Удалить"
            width="inline"
            hover="red"
            onClick={() => setDel(true)}
          />
        </div>
      </div>
      {LessonContents[lesson.lessonType]()}

      {update && (
        <Modal onClose={() => setUpdate(false)}>
          <AddLessonForm
            onClose={() => setUpdate(false)}
            id=""
            oldData={lesson}
          />
        </Modal>
      )}
      {del && (
        <Modal onClose={() => setDel(false)}>
          <AppointDeleteLesson onClose={() => setDel(false)} />
        </Modal>
      )}
    </div>
  );
}
