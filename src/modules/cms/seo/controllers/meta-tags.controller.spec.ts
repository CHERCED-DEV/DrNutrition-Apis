import { Test, TestingModule } from '@nestjs/testing';
import { MetaTagsController } from './meta-tags.controller';

describe('MetaTagsController', () => {
  let controller: MetaTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetaTagsController],
    }).compile();

    controller = module.get<MetaTagsController>(MetaTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
