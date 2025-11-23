"use client";

import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import Textarea from "@/shared/ui/Textarea";
import { useAppDispatch } from "@/store/store";
import React, { useEffect, useState } from "react";
import { createCourse, updateCourse } from "../../models/course.slice";
import { Course } from "../../course.types";

type AddCourseFormProps = {
  onClose: () => void;
  oldData?: Course;
};

export default function AddCourseForm({
  onClose,
  oldData,
}: AddCourseFormProps) {
  const [name, setName] = useState(oldData?.name || "");
  const [description, setDescription] = useState(oldData?.description || "");
  const dispatch = useAppDispatch();
  const sub = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!oldData) {
      const res = await dispatch(createCourse({ name, description })).unwrap();
      if (res) {
        onClose();
      }
    } else {
      const res = await dispatch(updateCourse({ name, description })).unwrap();
      if (res) {
        onClose();
      }
    }
  };
  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-center text-neutral-700">
        {oldData ? "Обновление курса" : "Создание курса"}
      </h1>
      <Input
        label="Название"
        placeholder="Введите название курса"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        label="Описание"
        placeholder="Введите описание курса"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      <div>
        <Button type="submit" title={oldData ? 'Обновить' : "Добавить"} mode="darkgreen" onClick={sub} />
      </div>
    </form>
  );
}
