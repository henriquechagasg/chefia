import {
  IsEmail,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Matches(new RegExp('^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}$'))
  phone?: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsUrl()
  avatar_url?: string;
}
