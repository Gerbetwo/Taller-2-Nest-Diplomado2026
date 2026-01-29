import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create_customer.dto';
import { UpdateCustomerDto } from './dto/update_customer.dto';
import { Customer } from './entities/customer.entity';
@Injectable()
export class CustomersService {

    private customers: Customer[] = [];
    private nextId = 1;

    create(dto: CreateCustomerDto): Customer {
        const newCustomer: Customer = {
            id: this.nextId++,
            fullName: dto.fullName,
            email: dto.email,
            phone: dto.phone,
            isActive: true,
            createdAt: new Date().toISOString(),
        };

        this.customers.push(newCustomer);
        return newCustomer;
    }
    // Obtener todos los registros de la base de datos Customers
    findAll(): Customer[] {
        return this.customers;
    }
    // Obtener un registro de la base de datos Customers: Customer: <ID>
    findOne(id: number): Customer {
    const found = this.customers.find(c => c.id === id);
        if (!found) throw new NotFoundException(`Customer ${id} no existe`);
        return found;
    }
    // Modificar o actualizar un registro de la base de datos Customers: Customer:[<ID>, <CustomerObject>]
    update(id: number, dto: UpdateCustomerDto): Customer {
        const customer = this.findOne(id);
        Object.assign(customer, dto);
        return customer;
    }

    // Eliminar un registro de la base de datos Customers: Customer: <ID>
    remove(id: number): void {
        const idx = this.customers.findIndex(c => c.id === id);
        if (idx === -1) throw new NotFoundException(`Customer ${id} no existe`);
        this.customers.splice(idx, 1);
    }
}