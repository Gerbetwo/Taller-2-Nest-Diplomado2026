import { Module } from '@nestjs/common';
import { DepartmentsController } from './departaments.controller';
import { DepartmentsService } from './departaments.service';

@Module({
  controllers: [DepartmentsController],
  providers: [DepartmentsService]
})
export class DepartmentsModule {}
