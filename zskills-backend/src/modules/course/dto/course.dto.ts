import { IsNotEmpty, IsString } from "class-validator";

export class CousreDto {
    @IsNotEmpty({message: 'Название обязательно'})
    @IsString({message: 'Название должно быть строкой'})
    name: string

    @IsString({message: 'Описание должно быть строкой'})
    description?: string
}