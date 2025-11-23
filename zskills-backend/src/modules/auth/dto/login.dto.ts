import { IsNotEmpty, IsString } from "class-validator"

export class LoginDTO {
    @IsNotEmpty({message: 'Логин обязателен'})
    @IsString({message: 'Логин должен быть строкой'})
    login: string

    @IsNotEmpty({message: 'Пароль обязателен'})
    @IsString({message: 'Пароль должен быть строкой'})
    password: string
}