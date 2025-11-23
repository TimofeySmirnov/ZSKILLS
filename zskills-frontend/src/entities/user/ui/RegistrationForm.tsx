"use client";
import { useForm } from "react-hook-form";
import { registrationDTO } from "../user.types";
import { store } from "@/store/store";
import { registration } from "../models/user.slice";
import { useRouter } from "next/navigation";
import { Routes } from "@/shared/data/routes.data";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";
import Link from "next/link";

export default function RegistrationForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<registrationDTO>();
  const router = useRouter();
  const onSubmit = async (data: registrationDTO) => {
    const result = await store.dispatch(registration(data));
    if (registration.fulfilled.match(result)) {
      router.push(Routes.HOME_PAGE);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col px-4 py-4 gap-4 items-start w-1/4 justify-between h-auto shadow-2xl rounded-2xl"
    >
      <div className="flex flex-col gap-3 w-full">
        <h1 className="text-emerald-400 text-3xl font-semibold">ZSkills</h1>
        <h2 className="text-2xl text-neutral-500 font-semibold">
          Создайте аккаунт <br /> и тестируйте платформу <br /> <span className="text-emerald-400">14 дней бесплатно</span>
        </h2>
        <Input
          type="text"
          label="Фамилия"
          placeholder="Иванов"
          registration={register("lastName", {
            required: "Фамилия обязательна",
          })}
          error={errors.lastName}
        />
        <Input
          type="text"
          label="Имя"
          placeholder="Иван"
          registration={register("firstName", {
            required: "Имя обязательно",
          })}
          error={errors.firstName}
        />
        <Input
          type="email"
          label="Email"
          placeholder="example@example.com"
          registration={register("email", {
            required: "Email обязателен",
          })}
          error={errors.email}
        />
        <Input
          type="tel"
          label="Номер телефона"
          placeholder="+7 (999) 999 99-99"
          registration={register("phoneNumber", {
            required: "Телефон обязателен",
          })}
          error={errors.phoneNumber}
        />
        <Input
          type="password"
          label="Пароль"
          placeholder="Придумайте надежный пароль"
          registration={register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 8,
              message: "Длина пароля должна быть не меньше 8",
            },
          })}
          error={errors.password}
        />
      </div>
      <div className="flex flex-col gap-2 w-full text-center">
        <Button title="Создать аккаунт" mode="darkgreen" />
        <div>
          <p>
            Уже есть аккаунт?{" "}
            <span>
              <Link href={Routes.LOGIN_PAGE}>
                <span className="text-emerald-400">Войти</span>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </form>
  );
}
