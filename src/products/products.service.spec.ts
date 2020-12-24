import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';

describe('ProductsService', () => {
  let service: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsController],
    }).compile();

    service = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
