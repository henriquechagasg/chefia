import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
@Injectable()
export class EnvironmentConfigService {
  constructor(private configService: ConfigService) {}

  getDatabaseUser(): string {
    return this.configService.get<string>('DATABASE_USER');
  }

  getDatabasePassword(): string {
    return this.configService.get<string>('DATABASE_PASSWORD');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }

  getDatabaseUri(): string {
    return (
      'mongodb+srv://' +
      this.getDatabaseUser() +
      ':' +
      this.getDatabasePassword() +
      '@cluster0.rjize.mongodb.net/' +
      this.getDatabaseName() +
      '?retryWrites=true&w=majority'
    );
  }
}
