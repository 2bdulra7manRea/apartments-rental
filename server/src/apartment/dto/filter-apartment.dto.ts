import { IsNumber } from 'class-validator';

export class FilterApartmentDto {
  @IsNumber()
  number_of_rooms?: number;

  @IsNumber()
  price_per_month?: number;

  @IsNumber()
  floor_area_size?: number;

  @IsNumber()
  skip?: number;

  @IsNumber()
  take?: number;
}
