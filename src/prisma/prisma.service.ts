import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

// IMPORTANTE: Importa desde la carpeta personalizada que definiste en el schema


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error('DATABASE_URL no encontrada en el .env');
    }

    // En Prisma 7, el adaptador requiere un pool de 'pg' explícito
    const pool = new Pool({ connectionString: url });
    const adapter = new PrismaPg(pool);

    // Pasamos el adaptador a la clase base
    super({ adapter });
  }

  async onModuleInit() {
    // Conexión obligatoria en Prisma 7 al usar adaptadores
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}