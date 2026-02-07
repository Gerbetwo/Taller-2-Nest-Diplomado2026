import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: { code: string; title: string; departamentId: number }) {
    return this.prisma.course.create({ data });
  }
  async findAll() {
    return this.prisma.course.findMany({
      include: { departament: true },
      orderBy: { id: 'asc' },
    });
  }
  async addTags(courseId: number, tagNames: string[]) {
    // upsert tags
    const tags = await Promise.all(
      tagNames.map((name) =>
        this.prisma.tag.upsert({
          where: { name },
          update: {},
          create: { name },
        }),
      ),
    );
    // conectar tags al curso
    const updated = await this.prisma.course.update({
      where: { id: courseId },
      data: {
        tags: {
          connect: tags.map((t) => ({ id: t.id })),
        },
      },
      include: { tags: true },
    });
    return updated;
  }
  async detail(courseId: number) {
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
      include: { tags: true, departament: true },
    });
    if (!course) throw new NotFoundException(`Course ${courseId} no existe`);
    return course;
  }

  // Obtener un registro de la base de datos course: course: <ID>
  async findOne(id: number) {
    const course = await this.prisma.course.findUnique({ where: { id } });
    if (!course) throw new NotFoundException(`courses ${id} no existe`);
    return course;
  }

  // Eliminar un registro de la base de datos course: course: <ID>
  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.course.delete({ where: { id } });
  }

  // Modificar o actualizar un registro de la base de datos Customers: Customer:[<ID>, <CustomerObject>]
  async update(
    id: number,
    data: { code: string; title: string; departamentId: number },
  ) {
    await this.findOne(id); // asegura 404 si no existe
    return this.prisma.course.update({
      where: { id },
      data: data,
    });
  }
}
