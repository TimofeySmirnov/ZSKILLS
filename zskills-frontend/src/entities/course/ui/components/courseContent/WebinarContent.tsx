"use client";

import { useWebinarInfo } from "@/entities/course-webinar/models/course-webinar.hooks";
import { getWebinarInfo } from "@/entities/course-webinar/models/course-webinar.slice";
import { useSelectedLesson } from "@/entities/course/models/course.hooks";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";
import AddWebinarComponent from "./webinar/AddWebinarComponent";
import WebinarInfoComponent from "./webinar/WebinarInfoComponent";

export default function WebinarContent() {
  const lesson = useSelectedLesson();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const loadWebinar = () => {
      if (lesson == "main") return;
      dispatch(getWebinarInfo(lesson.id));
    };
    loadWebinar();
  }, [lesson]);

  const webinar = useWebinarInfo();

  if (lesson === "main") return null;

  return (
    <div className="flex justify-center">
      {webinar ? (
        <WebinarInfoComponent webinar={webinar} />
      ) : (
        <AddWebinarComponent id={lesson.id} />
      )}
    </div>
  );
}
