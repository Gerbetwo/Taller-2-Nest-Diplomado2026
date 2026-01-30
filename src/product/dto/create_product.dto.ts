import { IsString, IsNotEmpty, IsOptional, IsInt, IsNumber, IsUUID, Min } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsNotEmpty()
    sku: string;

    @IsNumber()
    @Min(0)
    @IsNotEmpty()
    price: number; // En el service lo convertiremos a Decimal

    @IsInt()
    @Min(0)
    @IsNotEmpty()
    stock: number;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    categoryId: number;

    @IsString()
    @IsOptional()
    tag?: string; 
}