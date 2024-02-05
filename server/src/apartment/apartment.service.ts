import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apartment } from './entities/apartment.entity';
import { FilterApartmentDto } from './dto/filter-apartment.dto';
import { FilterQueryBuilder } from 'src/common/helpers';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(Apartment)
    private apartmentRepository: Repository<Apartment>,
  ) {}

  create(createApartmentDto: CreateApartmentDto) {
    return this.apartmentRepository.insert(createApartmentDto);
  }

  async findAll(query: FilterApartmentDto) {
    const filterQueryBuilder = new FilterQueryBuilder(query);
    filterQueryBuilder.addFilter('floor_area_size');
    filterQueryBuilder.addFilter('price_per_month');
    filterQueryBuilder.addFilter('number_of_rooms');
    return await this.apartmentRepository.find({
      where: filterQueryBuilder.build(),
      skip: query.skip || 0,
      take: query.take || 10,
    });
  }

  updateStatus(id: number, value: boolean) {
    return this.apartmentRepository.update(id, { status: value });
  }

  findOne(id: number) {
    return this.apartmentRepository.findBy({ id: id });
  }

  update(id: number, updateApartmentDto: UpdateApartmentDto) {
    return this.apartmentRepository.update(id, updateApartmentDto);
  }

  remove(id: number) {
    return this.apartmentRepository.delete(id);
  }
}
