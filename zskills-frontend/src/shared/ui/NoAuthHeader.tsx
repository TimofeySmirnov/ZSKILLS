"use client";
import { useRouter } from "next/navigation";
import headerData from "../data/header.data";
import Button from "./Button";
import { Routes } from "../data/routes.data";
import { useIsAuth } from "@/entities/user/models/user.hooks";
import { store } from "@/store/store";
import { logout } from "@/entities/user/models/user.slice";
import LogoutButton from "./LogoutButton";

export default function NoAuthHeader() {
  const router = useRouter();
  const isAUth = useIsAuth();
  const handleGoLogin = () => {
    router.replace(Routes.LOGIN_PAGE);
  };
  const handleGoRegister = () => {
    router.replace(Routes.REGISTRATION_PAGE);
  };
  const handleGoProfile = () => {
    router.replace(Routes.PROFILE_PAGE);
  };
  const handleClickToMenu = (href: string) => {
    router.replace(href);
  };
  
  return (
    <header className="w-full flex justify-center pb-4">
      <div className="flex p-2 gap-2 w-6xl justify-between items-center">
        <div className="flex items-center justify-center p-1">
          <h1
            onClick={() => handleClickToMenu(Routes.HOME_PAGE)}
            className="text-emerald-400 text-3xl font-semibold hover:cursor-pointer"
          >
            ZSkills
          </h1>
        </div>
        <nav className="flex gap-4 p-1">
          {headerData.map((data, index) => (
            <div
              key={index}
              onClick={() => handleClickToMenu(data.href)}
              className="hover:cursor-pointer hover:bg-neutral-200 p-2 rounded-md"
            >
              <span className="text-neutral-700">{data.title}</span>
            </div>
          ))}
        </nav>
        <div>
          <div className="flex flex-col gap-1 p-1">
            <span className="text-neutral-500">Бесплатный звонок</span>
            <h2>+7 (999) 999 99-99</h2>
          </div>
        </div>
        {!isAUth ? (
          <nav className="flex gap-2 p-1 items-center justify-between">
            <Button title="Вход" onClick={handleGoLogin} />
            <Button
              title="Регистрация"
              onClick={handleGoRegister}
              mode="green"
            />
          </nav>
        ) : (
          <nav className="flex gap-2 p-1 items-center justify-between">
            <Button title="Профиль" mode="darkgreen" onClick={handleGoProfile}/>
            <LogoutButton />
          </nav>
        )}
      </div>
    </header>
  );
}
