import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { DepartamentsService } from './departaments.service';
@Controller('departments')
export class DepartmentsController {
    constructor(private readonly service: DepartamentsService) { }

    @Post()
    async create(@Body() body: { name: string }) {
        return this.service.create(body.name);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Get()
    async findOne( id ) {
        return this.service.findOne(id);
    }

    @Get(':id/courses')
    async findOneWithCourses(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOneWithCourses(id);
    }
}