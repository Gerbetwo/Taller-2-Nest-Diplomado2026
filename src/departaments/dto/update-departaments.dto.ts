import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartamensDto } from './create-departaments.dto';

export class UpdateDepartamensDto extends PartialType(CreateDepartamensDto){

}