import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWebinarDto {
  @IsNotEmpty({ message: 'Ссылка на подключение обязательна' })
  @IsString({ message: 'Ссылка на подключение должна быть строкой' })
  link: string;

  @IsNotEmpty({ message: 'Дата подключение обязательна' })
  @IsString({ message: 'Дата подключение должна быть строкой' })
  connectTime: string;

  
  description?: string;
}
