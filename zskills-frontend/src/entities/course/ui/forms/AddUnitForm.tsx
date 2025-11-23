"use client";

import { useAppDispatch } from "@/store/store";
import { useState } from "react";
import { createCourse, createUnit } from "../../models/course.slice";
import Input from "@/shared/ui/Input";
import Textarea from "@/shared/ui/Textarea";
import Button from "@/shared/ui/Button";

type AddCourseFormProps = {
  onClose: () => void;
};

export default function AddUnitForm({ onClose }: AddCourseFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();
  const sub = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await dispatch(createUnit({ name, description })).unwrap();
    if (res) {
      onClose();
    }
  };
  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-center text-neutral-700">
        Создание модуля
      </h1>
      <Input
        label="Название"
        placeholder="Введите название модуля"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        label="Описание"
        placeholder="Введите описание модуля"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <Button type="submit" title="Добавить" mode="darkgreen" onClick={sub} />
      </div>
    </form>
  );
}
