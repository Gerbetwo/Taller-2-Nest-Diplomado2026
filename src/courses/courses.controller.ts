import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { UpdateCustomerDto } from 'src/customers/dto/update-customer.dto';
@Controller('courses')
export class CoursesController {
    constructor(private readonly service: CoursesService) { }
    @Post()
    async create(@Body() body: { code: string; title: string; departamentId: number }) {
        return this.service.create(body);
    }
    @Get()
    async findAll() {
        return this.service.findAll();
    }
    @Get(':id')
    async detail(@Param('id', ParseIntPipe) id: number) {
        return this.service.detail(id);
    }
    @Post(':id/tags')
    async addTags(@Param('id', ParseIntPipe) id: number, @Body() body: { tags: string[] }) {
        return this.service.addTags(id, body.tags);
    }
    // PATCH: funvcion to create customer Customer.update(<id>, <CustomerObject>)
    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() body: { code: string; title: string; departamentId: number }) {
        return this.service.update(id, body);
    }
    // PATCH: funvcion to create customer Customer.update(<id>, <CustomerObject>)
    @Put(':id')
    async upgrade(@Param('id', ParseIntPipe) id: number, @Body() body: { code: string; title: string; departamentId: number }) {
        return this.service.update(id, body);
    }
    // DELETE: funvcion to create customer Customer.remove(<id>)
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseIntPipe) id: number) {
        await this.service.remove(id);
    }
}