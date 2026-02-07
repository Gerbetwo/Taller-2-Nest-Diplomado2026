import { Module } from '@nestjs/common';
import { DepartamentsController } from './departaments.controller';
import { DepartamentsService } from './departaments.service';

@Module({
  controllers: [DepartamentsController],
  providers: [DepartamentsService],
})
export class DepartmentsModule {}
