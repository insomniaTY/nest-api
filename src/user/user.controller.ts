import { UserService } from './user.service';
import { PrismaService } from './../prisma/prisma.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCreateInput, User } from '@prisma/client';
import { User as UserModel } from '@prisma/client';

@Controller()
export class UserController {
    constructor(
        private readonly prisma: PrismaService,
        private readonly user: UserService) {}

    @Post('register')
    async createСustomer(
        @Body() userData: {name: string, email: string},
    ): Promise<UserModel> {
        return this.user.createUser(userData)
    }

}
