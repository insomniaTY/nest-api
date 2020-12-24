import { Injectable, Post } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserDto } from "../dto/user.dto";

import {
    UserUpdateInput,
    User,
    UserCreateInput,
    UserWhereUniqueInput,
    UserWhereInput,
    UserOrderByInput,
    UserSelect
} from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {
    }

    async createUser(data: UserCreateInput): Promise<User> {
        return this.prisma.user.create({
        data
    })
}
}
