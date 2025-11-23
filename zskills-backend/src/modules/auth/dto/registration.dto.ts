import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Length } from 'class-validator';

export class RegistrationDTO {
  @IsNotEmpty({ message: 'Имя обязательно' })
  @IsString({ message: 'Имя должно быть строкой' })
  firstName: string;

  @IsNotEmpty({ message: 'Фамилия обязательна' })
  @IsString({ message: 'Фамилия должна быть строкой' })
  lastName: string;

  @IsNotEmpty({ message: 'Почта обязательна' })
  @IsString({ message: 'Почта должна быть строкой' })
  @IsEmail({}, { message: 'Указан невалидный формат email' })
  email: string;

  @IsNotEmpty({ message: 'Телефон обязателен' })
  @IsString({ message: 'Телефон должен быть строкой' })
  @IsPhoneNumber('RU', {message: 'Указан невалидный телефон'})
  phoneNumber: string;

  @IsNotEmpty({message: 'Пароль обязательный'})
  @IsString({message: 'Пароль должен быть строкой'})
  @Length(8, 20, {message: 'Пароль должен быть от 8-20 символов'})
  password: string;
}
