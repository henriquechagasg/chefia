import { Restaurant } from '../schemas/restaurant.schema';

export interface MockedRestaurant extends Omit<Restaurant, '_id'> {
  _id: string;
}
