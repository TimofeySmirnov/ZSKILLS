"use client";

import { useAppDispatch } from "@/store/store";
import { deleteCourse } from "../../models/course.slice";
import { Course } from "../../course.types";
import Button from "@/shared/ui/Button";
import { useRouter } from "next/navigation";

type AppointDeleteCourseModalProps = {
  course: Course;
  onClose: () => void;
};

export default function AppointDeleteCourseModal({
  course,
  onClose,
}: AppointDeleteCourseModalProps) {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const handleSubmit = async () => {
    const res = await dispatch(deleteCourse(course.id)).unwrap();
    if (res) {
      onClose();
      router.back()
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg text-neutral-600">
        Вы действительно хотитите удалить курс: <br />{" "}
        <span className="font-semibold text-neutral-700">{course.name}</span>?
      </h1>
      <div className="flex flex-col gap-2">
        <Button title="Удалить" hover="red" onClick={handleSubmit} />
        <Button title="Отмена" mode="green" onClick={onClose} />
      </div>
    </div>
  );
}
