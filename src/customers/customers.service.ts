import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {

    //private readonly prisma: PrismaService;
    constructor(private readonly prisma: PrismaService) {}
    // Funcion Asincrona para crear el objeto de prisma
    async create(dto: CreateCustomerDto) {
        return this.prisma.customer.create({
            data: {
                fullName: dto.fullName,
                email: dto.email,
                phone: dto.phone,
            },
        });
    }

    // Obtener todos los registros de la base de datos Customers
    async findAll() {
        return this.prisma.customer.findMany({
            orderBy: { id: 'asc' },
        });
    }

    // Obtener un registro de la base de datos Customers: Customer: <ID>
    async findOne(id: number) {
        const customer = await this.prisma.customer.findUnique({ where: { id } });
        if (!customer) throw new NotFoundException(`Customer ${id} no existe`);
        return customer;
    }

    // Modificar o actualizar un registro de la base de datos Customers: Customer:[<ID>, <CustomerObject>]
    async update(id: number, dto: UpdateCustomerDto) {
        await this.findOne(id); // asegura 404 si no existe
        return this.prisma.customer.update({
            where: { id },
            data: dto,
        });
    }

    // Eliminar un registro de la base de datos Customers: Customer: <ID>
    async remove(id: number) {
        await this.findOne(id);
        await this.prisma.customer.delete({ where: { id } });
    }
}