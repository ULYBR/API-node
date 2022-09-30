import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PartsModule } from './parts/parts.module';

@Module({
  imports: [UsersModule, PartsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
