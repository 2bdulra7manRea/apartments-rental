import { Test, TestingModule } from '@nestjs/testing';
import { ApartmentController } from './apartment.controller';
import { ApartmentService } from './apartment.service';

describe('ApartmentController', () => {
  let controller: ApartmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApartmentController],
      providers: [ApartmentService],
    }).compile();

    controller = module.get<ApartmentController>(ApartmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
