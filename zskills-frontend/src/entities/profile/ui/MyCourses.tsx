"use client";

import { useMyCourses } from "@/entities/course/models/course.hooks";
import { getAllCourses } from "@/entities/course/models/course.slice";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import { useAppDispatch } from "@/store/store";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Modal from "@/shared/ui/Modal";
import AddCourseForm from "@/entities/course/ui/forms/AddCourseForm";

export default function MyCourses() {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCourses(name));
  }, [name]);
  const courses = useMyCourses();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-[70%_auto] items-center gap-10">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Поиск по названию"
        />
        <Button
          title="Добавить курс"
          mode="darkgreen"
          onClick={() => setOpen(true)}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-neutral-700">Мои курсы</h3>
        <div className="flex gap-4">
          {courses.map((i) => (
            <CourseCard key={i.name} c={i} />
          ))}
        </div>
      </div>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <AddCourseForm onClose={() => setOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
