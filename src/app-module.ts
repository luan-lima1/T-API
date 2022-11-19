import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/module/users-module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORTA),
      username: process.env.DB_USUARIO,
      password: process.env.DB_SENHA,
      database: process.env.DB_BD,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),

    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
