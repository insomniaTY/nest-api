import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';

@Module({
  providers: [PrismaService],
  controllers: [BasketController]
})
export class BasketModule {}
