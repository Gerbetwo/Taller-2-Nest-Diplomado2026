import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create_product.dto';
import { UpdateProductDto } from './dto/update_product.dto';
import { Product } from './entities/product.entity';
@Injectable()
export class ProductService {
    
    private Products: Product[] = [];
    private nextId = 1;

    create(dto: CreateProductDto): Product {
        const newProduct: Product = {
            id: this.nextId++,
            ProductName: dto.ProductName,
            ProductCode: dto.ProductName,
            ProductPrice: dto.ProductPrice,
            ProductQuantity: dto.ProductQuantity,
            ProductTag: dto.ProductTag,
            isActive: true,
            createdAt: new Date().toISOString(),
        };

        this.Products.push(newProduct);
        return newProduct;
    }
    // Obtener todos los registros de la base de datos Products
    findAll(): Product[] {
        return this.Products;
    }
    // Obtener un registro de la base de datos Products: Product: <ID>
    findOne(id: number): Product {
    const found = this.Products.find(c => c.id === id);
        if (!found) throw new NotFoundException(`Product ${id} no existe`);
        return found;
    }
    // Modificar o actualizar un registro de la base de datos Products: Product:[<ID>, <ProductObject>]
    update(id: number, dto: UpdateProductDto): Product {
        const Product = this.findOne(id);
        Object.assign(Product, dto);
        return Product;
    }

    // Eliminar un registro de la base de datos Products: Product: <ID>
    remove(id: number): void {
        const idx = this.Products.findIndex(c => c.id === id);
        if (idx === -1) throw new NotFoundException(`Product ${id} no existe`);
        this.Products.splice(idx, 1);
    }

}
