import { ProductsDto } from './../dto/products.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';

@Controller('home')
export class ProductsController {
    products = new BehaviorSubject(ProductsDto);
    constructor(private readonly prismaService: PrismaService) {}

}

