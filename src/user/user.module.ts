import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from './../prisma/prisma.service';

@Module({
  providers: [PrismaService],
  controllers: [UserController]
})
export class UserModule {}
