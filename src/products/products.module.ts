import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { PrismaService } from './../prisma/prisma.service';

@Module({
  providers: [PrismaService],
  controllers: [ProductsController]
})
export class ProductsModule {}
