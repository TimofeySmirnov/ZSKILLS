import { IsNotEmpty, IsString } from "class-validator"

export class UnitDto {
    @IsNotEmpty({message: 'Название модуля обязательно'})
    @IsString({message: 'Название должно быть строкой'})
    name: string

    @IsString({message: 'Описание должно быть строкой'})
    description?: string
}