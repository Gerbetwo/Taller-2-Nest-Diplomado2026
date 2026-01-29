import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create_product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly customersService: ProductService) { }

    @Post()
    create(@Body() dto: CreateProductDto) {
        return this.customersService.create(dto);
    }

    @Get()
    read() {
        return this.customersService.findAll()
    }
}
