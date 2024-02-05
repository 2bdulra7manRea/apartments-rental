import { Test, TestingModule } from '@nestjs/testing';
import { ApartmentService } from './apartment.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApartmentDto } from './dto/create-apartment.dto';

import { Apartment } from './entities/apartment.entity';
import { FilterApartmentDto } from './dto/filter-apartment.dto';

const mockApartment = {
  name: 'apartment1',
  number_of_rooms: 10,
  price_per_month: 200,
  floor_area_size: 120,
  description: 'good',
  coordinates: '[21321,312323]',
};

describe('ApartmentService', () => {
  let apartmentService: ApartmentService;
  let apartmentRepository: Repository<Apartment>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApartmentService,
        {
          provide: getRepositoryToken(Apartment),
          useClass: Repository,
        },
      ],
    }).compile();

    apartmentService = module.get<ApartmentService>(ApartmentService);
    apartmentRepository = module.get<Repository<Apartment>>(
      getRepositoryToken(Apartment),
    );
  });

  it('should be defined', () => {
    expect(apartmentService).toBeDefined();
  });

  describe('create', () => {
    it('should create a new apartment', async () => {
      const createApartmentDto: CreateApartmentDto = {
        name: 'apartment1',
        number_of_rooms: 10,
        price_per_month: 200,
        floor_area_size: 120,
        description: 'good',
        coordinates: '[21321,312323]',
      };

      const result = await apartmentService.create(createApartmentDto);

      expect(result).toEqual(mockApartment);
    });
  });

  describe('findAll', () => {
    it('should find all apartments with filters', async () => {
      const filterApartmentDto: FilterApartmentDto = {
        take: 10,
        number_of_rooms: 1,
      };
      jest.spyOn(apartmentRepository, 'find').mockResolvedValueOnce([]);

      const result = await apartmentService.findAll(filterApartmentDto);

      expect(result).toEqual([mockApartment]);
    });
  });
});
