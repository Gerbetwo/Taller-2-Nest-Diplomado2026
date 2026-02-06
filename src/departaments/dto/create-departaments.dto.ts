import { IsString, IsNotEmpty, IsEmail, IsOptional } from "class-validator";

export class CreateDepartamensDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;
}