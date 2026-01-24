import { IsString, IsNotEmpty, IsEmail, IsOptional, IsInt, IsNumber } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    ProductName: string;
    @IsNotEmpty()
    ProductCode: string;
    @IsNotEmpty()
    @IsNumber()
    ProductPrice: Number;
    @IsString()
    @IsInt()
    ProductQuantity: Number;
    @IsString()
    @IsOptional()
    ProductTag?: string;
}