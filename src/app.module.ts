import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [HealthModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
