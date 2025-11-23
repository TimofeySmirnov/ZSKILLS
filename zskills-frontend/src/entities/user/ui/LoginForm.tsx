"use client";
import { useForm } from "react-hook-form";
import { loginDTO } from "../user.types";
import { store } from "@/store/store";
import { login } from "../models/user.slice";
import Input from "@/shared/ui/Input";
import { useRouter } from "next/navigation";
import { Routes } from "@/shared/data/routes.data";
import Button from "@/shared/ui/Button";
import Link from "next/link";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginDTO>();
  const router = useRouter();
  const onSubmit = async (data: loginDTO) => {
    console.log('trigger submit')
    const result = await store.dispatch(login(data));
    if (login.fulfilled.match(result)) {
      router.push(Routes.HOME_PAGE);
    }
  };
  const loginRegex =
    /^((\+?\d{10,15})|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}))$/;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col px-4 py-4 gap-2 items-start w-1/4 justify-between h-full shadow-2xl rounded-2xl"
    >
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-emerald-400 text-3xl font-semibold">ZSkills</h1>
        <h2 className="text-3xl text-neutral-500 font-semibold">
          Вход в аккаунт
        </h2>
        <Input
          type="text"
          label="Телефон или email"
          placeholder="Введите телефон или email"
          registration={register("login", {
            required: "Логин обязателен",
            pattern: {
              value: loginRegex,
              message: "Введите корректный телефон или email",
            },
          })}
          error={errors.login}
        />
        <Input
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          registration={register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 8,
              message: "Пароль должен быть не меньше 8 символов",
            },
          })}
          error={errors.password}
        />
      </div>
      <div className="flex flex-col gap-4 w-full text-center">
        <Button title="Войти в аккаунт" mode="darkgreen" />
        <div>
          <p>
            Еще нет аккаунта?{" "}
            <span>
              <Link href={Routes.REGISTRATION_PAGE}>
                <span className="text-emerald-400">Зарегистрироваться</span>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </form>
  );
}
