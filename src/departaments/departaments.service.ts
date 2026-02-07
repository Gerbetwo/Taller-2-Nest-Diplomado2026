import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class DepartamentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(name: string) {
    return this.prisma.departament.create({ data: { name } });
  }

  async findAll() {
    return this.prisma.departament.findMany({ orderBy: { id: 'asc' } });
  }

  // Obtener un registro de la base de datos Departaments: <ID>
  async findOne(id: number) {
    const departaments = await this.prisma.departament.findUnique({
      where: { id },
    });
    if (!departaments)
      throw new NotFoundException(`departaments ${id} no existe`);
    return departaments;
  }

  async findOneWithCourses(id: number) {
    const dept = await this.prisma.departament.findUnique({
      where: { id },
      include: { courses: { orderBy: { id: 'asc' } } },
    });

    if (!dept) throw new NotFoundException(`departament ${id} no existe`);
    return dept;
  }
}
