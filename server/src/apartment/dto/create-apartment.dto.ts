import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateApartmentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  coordinates: string;

  @IsNotEmpty()
  @IsNumber()
  number_of_rooms: number;

  @IsNotEmpty()
  @IsNumber()
  price_per_month: number;

  @IsNotEmpty()
  @IsNumber()
  floor_area_size: number;
}
