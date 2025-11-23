"use client";

import { useAppDispatch } from "@/store/store";
import { useState } from "react";
import {
  createCourse,
  createLesson,
  createUnit,
  updateLesson,
} from "../../models/course.slice";
import Input from "@/shared/ui/Input";
import Textarea from "@/shared/ui/Textarea";
import Button from "@/shared/ui/Button";
import { LessonTypes } from "@/entities/lesson/lesson.types";
import { Lesson, LESSON_TYPES } from "../../course.types";
import { TriangleAlert } from "lucide-react";

type AddCourseFormProps = {
  onClose: () => void;
  id: string;
  oldData?: Lesson;
};

export const convertTypes: Record<LESSON_TYPES, LessonTypes> = {
  lecture: LessonTypes.lecture,
  test: LessonTypes.test,
  webinar: LessonTypes.webinar,
};

export const reverseConvert: Record<LessonTypes, LESSON_TYPES> = {
  Вебинар: LESSON_TYPES.webinar,
  Лекция: LESSON_TYPES.lecture,
  Тест: LESSON_TYPES.test,
};

const lessonTypeMap: Record<keyof typeof LessonTypes, string> = {
  lecture: LessonTypes.lecture,
  test: LessonTypes.test,
  webinar: LessonTypes.webinar,
};

export default function AddLessonForm({
  onClose,
  id,
  oldData,
}: AddCourseFormProps) {
  const [name, setName] = useState(oldData?.name || "");
  //@ts-ignore
  const [type, setType] = useState<LessonTypes | "">(oldData?.lessonType || "");
  const dispatch = useAppDispatch();
  const sub = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (type === "") {
      throw new Error("Выберите тип урока");
    }
    const completeData = { name, lessonType: type };
    console.log(completeData, type);
    if (!oldData) {
      const data = { id, data: completeData };
      const res = await dispatch(createLesson(data)).unwrap();
      if (res) {
        onClose();
      }
    } else {
      const res = await dispatch(updateLesson(completeData)).unwrap();
      if (res) {
        onClose();
      }
    }
  };
  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-center text-neutral-700">
        {oldData ? "Обновление урока" : "Создание урока"}
      </h1>
      <Input
        label="Название"
        placeholder="Введите название урока"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex flex-col gap-2">
        <label htmlFor="types" className="text-neutral-500">
          Тип урока
        </label>
        <select
          name="types"
          id="types"
          value={type}
          onChange={(e) => setType(e.target.value as LessonTypes)}
          className="
    w-full
    rounded-lg
    border border-neutral-300
    bg-neutral-100
    text-neutral-700
    px-3 py-2
    focus:outline-none
    focus:ring-2 
    focus:ring-emerald-400 
    focus:border-emerald-400
    transition
    cursor-pointer
  "
        >
          <option value="" disabled className="text-neutral-500">
            Выберите тип
          </option>

          {Object.entries(lessonTypeMap).map(([key, value]) => (
            <option value={key} key={key} className="text-neutral-700">
              {value}
            </option>
          ))}
        </select>
      </div>
      {oldData && (
        <div className="flex items-center justify-center rounded-lg px-4 py-2 bg-amber-300/60">

          <div className="flex gap-4 items-center">
            <TriangleAlert />
            <span>При изменении типа урока, прошлое содержимое сохраниться</span>
          </div>
        </div>
      )}
      <div>
        <Button
          type="submit"
          title={oldData ? "Обновить" : "Добавить"}
          mode="darkgreen"
          onClick={sub}
        />
      </div>
    </form>
  );
}
