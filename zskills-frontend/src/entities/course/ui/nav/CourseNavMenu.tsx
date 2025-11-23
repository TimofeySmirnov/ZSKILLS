"use client";

import { ProfileNavbarProps } from "@/shared/ui/ProfileNavbar";
import { useSelectedCourse } from "../../models/course.hooks";
import UnitBlock from "./UnitBlock";
import { cutText } from "@/utils/cutText";
import Button from "@/shared/ui/Button";
import { useState } from "react";
import Modal from "@/shared/ui/Modal";
import AddUnitForm from "../forms/AddUnitForm";
import { useAppDispatch } from "@/store/store";
import { setLesson } from "../../models/course.slice";

export default function CourseNavMenu({ closed }: ProfileNavbarProps) {
  const course = useSelectedCourse();

  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const handleClickToName = () => {
    dispatch(setLesson("main"));
  };
  return (
    <nav
      className={` ${
        closed ? "opacity-0" : ""
      } absolute h-[100vh] pt-25 gap-2 z-2 top-0 left-3 w-50 duration-200 flex flex-col`}
    >
      <h1
        onClick={handleClickToName}
        className="break-normal font-bold text-neutral-700 hover:cursor-pointer"
      >
        {course?.name}
      </h1>
      {course?.courseUnits.map((i) => (
        <UnitBlock key={i.id} u={i} />
      ))}
      <div>
        <Button
          title="Добавить модуль"
          paddings="small"
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <AddUnitForm onClose={() => setOpen(false)} />
        </Modal>
      )}
    </nav>
  );
}
