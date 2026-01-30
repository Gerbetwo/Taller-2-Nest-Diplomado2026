import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { CustomersModule } from './customers/customers.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [HealthModule, CustomersModule, ProductModule, PrismaModule,
    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
