import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create_product.dto';

export class UpdateCustomerDto extends PartialType(CreateProductDto){

}