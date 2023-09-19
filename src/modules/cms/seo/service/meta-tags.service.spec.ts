import { Test, TestingModule } from '@nestjs/testing';
import { MetaTagsService } from './meta-tags.service';

describe('MetaTagsService', () => {
  let service: MetaTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaTagsService],
    }).compile();

    service = module.get<MetaTagsService>(MetaTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
