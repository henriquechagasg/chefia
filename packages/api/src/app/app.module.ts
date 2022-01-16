import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import configuration from '../config/configuration';
import { EnvironmentConfigModule } from './config/environment-config/environment-config.module';

export interface DatabaseConfig {
  uri: string;
}

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.uri'),
      }),
      inject: [ConfigService],
    }),
    RestaurantsModule,
    EnvironmentConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
