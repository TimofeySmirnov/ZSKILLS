"use client";

import { TeacherNavElements } from "@/entities/profile/data/teacherProfile.data";
import MyCourses from "@/entities/profile/ui/MyCourses";
import MyStudents from "@/entities/profile/ui/MyStudents";

import { useSelectedTeacherCategory } from "@/entities/profile/models/profile.hooks";
import { Box, Users } from "lucide-react";
import { useAppDispatch } from "@/store/store";
import { setCategory } from "@/entities/profile/models/profile.slice";

export type ProfileNavbarProps = {
  closed: boolean;
};

export const TeacherNavIcons: Record<TeacherNavElements, React.ReactElement> = {
  Курсы: <Box stroke="#404040"/>,
  Ученики: <Users stroke="#404040"/>,
};



export default function ProfileNavbar({ closed }: ProfileNavbarProps) {
  const dispatch = useAppDispatch();
  const selected = useSelectedTeacherCategory()
  const selectCategory = (categoty: TeacherNavElements) => {
    dispatch(setCategory(categoty));
  };
  return (
    <nav
      className={` ${
        closed ? "opacity-0" : ""
      } fixed h-[100vh] pt-25 gap-10 z-2 top-0 left-3 w-14 duration-200 flex flex-col items-center`}
    >
      {Object.entries(TeacherNavIcons).map(([Key, value]) => (
        <div
          key={Key}
          onClick={() => selectCategory(Key as TeacherNavElements)}
          className={`${selected === Key ? 'bg-emerald-400/50' : 'bg-transparent' } p-2 duration-200 rounded-lg hover:cursor-pointer`}
        >
          {value}
        </div>
      ))}
    </nav>
  );
}
