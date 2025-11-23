"use client";

import { getCourseById } from "@/entities/course/models/course.slice";
import CoursePageComponent from "@/entities/course/ui/CoursePageComponent";
import { useAppDispatch } from "@/store/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function CoursePage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCourseById(id));
  }, []);
  return <CoursePageComponent/>;
}
