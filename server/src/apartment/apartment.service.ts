import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apartment } from './entities/apartment.entity';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(Apartment)
    private apartmentRepository: Repository<Apartment>,
  ) {}

  create(createApartmentDto: CreateApartmentDto) {
    return this.apartmentRepository.insert(createApartmentDto);
  }

  findAll() {
    return this.apartmentRepository.find({ where: {}, skip: 0, take: 10 });
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
