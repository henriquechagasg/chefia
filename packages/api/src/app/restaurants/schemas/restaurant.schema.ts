import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop()
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone?: string;

  @Prop()
  password: string;

  @Prop()
  description?: string;

  @Prop()
  avatar_url?: string;

  @Prop()
  desks?: number;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
