import { ConflictException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant, RestaurantDocument } from './schemas/restaurant.schema';
import * as bcrypt from 'bcrypt';

export class RestaurantsService {
  private readonly logger = new Logger(RestaurantsService.name);

  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<RestaurantDocument>,
  ) {}

  private async findByEmail(email: string) {
    return this.restaurantModel.findOne({ email }).exec();
  }

  public async register(createRestaurantDto: CreateRestaurantDto) {
    const { email, password } = createRestaurantDto;
    const emailExists = await this.findByEmail(email);
    if (emailExists) {
      throw new ConflictException('Email is already registered.');
    }

    createRestaurantDto.password = await bcrypt.hash(password, 10);

    const restaurant = await this.restaurantModel.create(createRestaurantDto);

    this.logger.log('Restaurant registered succesfully.');

    return restaurant;
  }

  public async findAll() {
    const restaurants = await this.restaurantModel.find();

    this.logger.log('List restaurants retrieved succesfully.');

    return restaurants;
  }

  public async findOne(id: string) {
    const restaurant = await this.restaurantModel.findById(id);

    this.logger.log('Restaurant retrieved succesfully.');

    return restaurant;
  }
}
