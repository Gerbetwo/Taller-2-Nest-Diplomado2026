import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create_customer.dto';
import { UpdateCustomerDto } from './dto/update_customer.dto';

@Controller('customers')

export class CustomersController {
    constructor(private readonly customersService: CustomersService) { }

    // POST: function to create customer Customer.create(<CustomerObject)
    @Post()
    create(@Body() dto: CreateCustomerDto) {
        return this.customersService.create(dto);
    }
    // GET: function to get all customers Customer.findAll()
    @Get()
    findAll() {
        return this.customersService.findAll()
    }
    // GET: function to get one customer Customer.findOne(<id>)
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.customersService.findOne(id);
    }
    // PATCH: funvcion to create customer Customer.update(<id>, <CustomerObject>)
    @Patch(':id')
    update( @Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCustomerDto) {
        return this.customersService.update(id, dto);
    }
        // PATCH: funvcion to create customer Customer.update(<id>, <CustomerObject>)
    @Put(':id')
    upgrade( @Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCustomerDto) {
        return this.customersService.update(id, dto);
    }
    // DELETE: funvcion to create customer Customer.remove(<id>)
    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id', ParseIntPipe) id: number) {
        this.customersService.remove(id);
    }

}
