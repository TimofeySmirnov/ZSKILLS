"use client";

import { pluralize } from "@/utils/pluralize";
import { useSelectedCourse } from "../../models/course.hooks";
import { BookCheck, PencilRuler } from "lucide-react";
import Button from "@/shared/ui/Button";
import { useState } from "react";
import Modal from "@/shared/ui/Modal";
import AppointDeleteCourseModal from "./AppointDeleteCourseModal";
import AddCourseForm from "../forms/AddCourseForm";

export default function MainCoursePage() {
  const selectedCourse = useSelectedCourse();
  const [del, setDel] = useState(false);
  const [update, setUpdate] = useState(false);
  if (!selectedCourse) return null;
  const pluralizeModules = (num: number) => {
    return pluralize(num, ["модуль", "модуля", "модулей"]);
  };
  const getLessonCount = () => {
    if (!selectedCourse) return null;
    let total = 0;
    for (const i of selectedCourse.courseUnits) {
      total += i.lessons.length;
    }
    return pluralize(total, ["урок", "урока", "уроков"]);
  };

  return (
    <div className="grid gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-neutral-500">
          Информация о курсе
        </h2>
        <h3 className="text-2xl font-bold text-neutral-700">
          {selectedCourse.name}
        </h3>
        <div>
          <p>{selectedCourse.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-1 items-center">
            <BookCheck />
            <h4 className="text-lg font-bold text-neutral-600">
              {pluralizeModules(selectedCourse.courseUnits.length)}
            </h4>
          </div>
          <div className="flex gap-1 items-center">
            <PencilRuler />
            <h4 className="text-lg font-bold text-neutral-600">
              {getLessonCount()}
            </h4>
          </div>
        </div>
      </div>
      <aside className="flex gap-4">
        <div>
          <Button
            title="Редактировать"
            mode="darkgreen"
            width="inline"
            onClick={() => setUpdate(true)}
          />
        </div>
        <div>
          <Button
            title="Удалить"
            hover="red"
            width="inline"
            onClick={() => setDel(true)}
          />
        </div>
      </aside>
      {del && (
        <Modal onClose={() => setDel(false)}>
          <AppointDeleteCourseModal
            onClose={() => setDel(false)}
            course={selectedCourse}
          />
        </Modal>
      )}
      {update && (
        <Modal onClose={() => setUpdate(false)}>
          <AddCourseForm
            onClose={() => setUpdate(false)}
            oldData={selectedCourse}
          />
        </Modal>
      )}
    </div>
  );
}
