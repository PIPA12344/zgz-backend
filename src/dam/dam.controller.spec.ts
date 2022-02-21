import { Test, TestingModule } from '@nestjs/testing';
import { DamController } from './dam.controller';

describe('DamController', () => {
  let controller: DamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DamController],
    }).compile();

    controller = module.get<DamController>(DamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
