import { IsString, IsNotEmpty, IsEmail, IsOptional } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsString()
    @IsOptional()
    phone?: string;
}