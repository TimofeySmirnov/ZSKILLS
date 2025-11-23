"use client";

import Button from "@/shared/ui/Button";
import { useState } from "react";
import { useIsOpenNav, useSelectedLesson } from "../models/course.hooks";
import MainCoursePage from "./components/MainCoursePage";
import LessonPage from "./components/LessonPage";

export default function CoursePageComponent() {
  const isOpen = useIsOpenNav();
  const selectedLesson = useSelectedLesson();

  return (
    <div
      className={`grid pl-7 pr-10 ${
        !isOpen ? "grid-cols-[13%_auto]" : "grid-cols-1"
      }`}
    >
      {!isOpen && (
        <div className="opacity-0">
          <p>
            
          </p>
        </div>
      )}
      <div>{selectedLesson === "main" ? <MainCoursePage /> : <LessonPage />}</div>
    </div>
  );
}
