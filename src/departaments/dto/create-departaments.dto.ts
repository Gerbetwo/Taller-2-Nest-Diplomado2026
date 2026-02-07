import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDepartamensDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
