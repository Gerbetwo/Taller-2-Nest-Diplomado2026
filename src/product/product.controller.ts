import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create_product.dto';
import { UpdateCustomerDto } from 'src/customers/dto/update_customer.dto';
import { UpdateProductDto } from './dto/update_product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    // POST: function to create customer Customer.create(<CustomerObject)
    @Post()
    async create(@Body() dto: CreateProductDto) {
        return this.productService.create(dto);
    }

    // GET: function to get all customers Customer.findAll()
    @Get()
    async read() {
        return this.productService.findAll()
    }

    // GET: function to get one customer Customer.findOne(<id>)
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.productService.findOne(id);
    }

    // PATCH: funvcion to create customer Customer.update(<id>, <CustomerObject>)
    @Patch(':id')
    async update( @Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductDto) {
        return this.productService.update(id, dto);
    }
        // PATCH: funvcion to create customer Customer.update(<id>, <CustomerObject>)
    @Put(':id')
    async upgrade( @Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductDto) {
        return this.productService.update(id, dto);
    }
    // DELETE: funvcion to create customer Customer.remove(<id>)
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseIntPipe) id: number) {
        await this.productService.remove(id);
    }
}
