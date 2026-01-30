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
    ProductPrice: number;
    @IsNotEmpty()
    @IsInt()
    ProductQuantity: number;
    @IsString()
    @IsOptional()
    ProductTag?: string;
}