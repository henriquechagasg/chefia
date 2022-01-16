import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface IRestaurant extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  readonly name: string;
  readonly email: string;
  readonly phone?: string;
  readonly password: string;
  readonly description?: string;
  readonly avatar_url?: string;
  readonly desks?: number;
}
