import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-.product.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class ProductService {
    //private readonly prisma: PrismaService;
    constructor(private readonly prisma: PrismaService) {}
    // Funcion Asincrona para crear el objeto de prisma
    async create(dto: CreateProductDto) {
        return this.prisma.product.create({
            data: {
                name: dto.name,
                description: dto.description,
                sku: dto.sku,
                price: dto.price,
                stock: dto.stock,
                categoryId: dto.categoryId,
                isActive: true,
            },
        });
    }
    // Obtener todos los registros de la base de datos Products
    async findAll() {
        return this.prisma.product.findMany({
            orderBy: { id: 'asc' },
        });
    }
    // Obtener un registro de la base de datos Products: Product: <ID>
    async findOne(id: number) {
        const product = await this.prisma.product.findUnique({ where: { id } });
        if (!product) throw new NotFoundException(`Produjct ${id} no existe`);
        return product;
    }
    // Modificar o actualizar un registro de la base de datos Products: Product:[<ID>, <ProductObject>]
    async update(id: number, dto: UpdateProductDto) {
        await this.findOne(id); // asegura 404 si no existe
        return this.prisma.product.update({
            where: { id },
            data: dto,
        });
    }

    // Eliminar un registro de la base de datos Products: Product: <ID>
    async remove(id: number) {
        await this.findOne(id);
        await this.prisma.product.delete({ where: { id } });
    }

}
