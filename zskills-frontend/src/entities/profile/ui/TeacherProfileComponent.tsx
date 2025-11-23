"use client";

import { TeacherNavElements } from "../data/teacherProfile.data";
import { useSelectedTeacherCategory } from "../models/profile.hooks";
import MyCourses from "./MyCourses";
import MyStudents from "./MyStudents";

export const TeacherNavComponents: Record<TeacherNavElements, () => React.ReactNode> =
  {
    Курсы: () => <MyCourses />,
    Ученики: () => <MyStudents />,
  };

export default function TeacherProfileComponent() {
  const selected = useSelectedTeacherCategory();
  return <div>{TeacherNavComponents[selected]()}</div>;
}
