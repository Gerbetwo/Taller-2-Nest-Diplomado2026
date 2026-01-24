import { IsString, IsNotEmpty, IsOptional, IsInt, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    ProductName: string;
    @IsString()
    @IsNotEmpty()
    ProductCode: string;
    @IsNotEmpty()
    @IsNumber()
    ProductPrice: Number;
    @IsNotEmpty()
    @IsInt()
    ProductQuantity: Number;
    @IsString()
    @IsOptional()
    ProductTag?: string;
}