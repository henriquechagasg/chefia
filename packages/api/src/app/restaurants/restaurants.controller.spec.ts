import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';

describe('RestaurantsController', () => {
  let restaurantsController: RestaurantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantsController],
      providers: [RestaurantsService],
    }).compile();

    restaurantsController = module.get<RestaurantsController>(
      RestaurantsController,
    );

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(restaurantsController).toBeDefined();
  });
});
