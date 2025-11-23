"use client";
import { useCurrentSub, useUser } from "@/entities/user/models/user.hooks";
import Button from "./Button";
import convertDate from "@/utils/dayjs.utils";
import LogoutButton from "./LogoutButton";
import { useRouter } from "next/router";
import { Routes } from "../data/routes.data";
import Link from "next/link";
import React, { useState } from "react";
import { Box, Menu, Users } from "lucide-react";
import ProfileNavbar from "./ProfileNavbar";
import CourseNavMenu from "@/entities/course/ui/nav/CourseNavMenu";
import { useIsOpenNav } from "@/entities/course/models/course.hooks";
import { useAppDispatch } from "@/store/store";
import { setOpenNav } from "@/entities/course/models/course.slice";

const ProfileItems = ["Что нового?", "Помощь"];

type ProfileHeaderProps = {
  isProfile?: boolean;
};

export default function ProfileHeader({
  isProfile = true,
}: ProfileHeaderProps) {
  const currentSub = useCurrentSub();
  const user = useUser();
  const tariffName = currentSub ? currentSub.tarifPlan.name : "Без тарифа";
  const userName = `${user?.firstName} ${user?.lastName}`;
  const daysToEnd = convertDate(currentSub?.dateEnd);
  const [closed, setClose] = useState<boolean>(true);
  const courseNavOpen = useIsOpenNav()
  const dispatch = useAppDispatch()
  const clickToOpenMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if(!isProfile) {
      dispatch(setOpenNav())
    }else {
      setClose(!closed);
    }
  };
  const booleanParam = isProfile ? closed : courseNavOpen
  return (
    <header className="w-full grid grid-cols-2 pb-4">
      {isProfile ? (
        <ProfileNavbar closed={closed} />
      ) : (
        <CourseNavMenu closed={courseNavOpen} />
      )}
      <div
        role="button"
        className={`z-3 absolute top-7 left-6 duration-200 hover:cursor-pointer ${
          booleanParam ? "rotate-0" : "rotate-90"
        }`}
        onClick={(e) => clickToOpenMenu(e)}
      >
        <Menu width={30} height={30} stroke="#404040" />
      </div>
      <div className="flex items-center py-2 pl-40 z-1 relative">
        <h1 className="text-emerald-400 text-3xl font-semibold hover:cursor-pointer">
          <Link href={Routes.HOME_PAGE}>ZSkills</Link>
        </h1>
      </div>
      <div className="flex p-4 items-center gap-2 w-full justify-between hover:cursor-pointer">
        <Link href={Routes.PRICING_PAGE}>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-md">Тариф "{tariffName}"</span>
            {daysToEnd && (
              <span className="text-xs text-neutral-500">До {daysToEnd}</span>
            )}
          </div>
        </Link>
        <nav className=" rounded-md flex gap-4">
          {ProfileItems.map((item, index) => (
            <div
              key={index}
              className="hover:cursor-pointer hover:bg-neutral-200 p-2 rounded-lg"
            >
              <span className="text-neutral-700">{item}</span>
            </div>
          ))}
        </nav>
        <div className="flex items-center p-2 gap-2">
          <div className="rounded-[50%] bg-neutral-500 w-10 h-10"></div>
          <h2>{userName}</h2>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
