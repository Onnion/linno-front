import { TestBed } from '@angular/core/testing';

import { FabricatorService } from './fabricator.service';

describe('FabricatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabricatorService = TestBed.get(FabricatorService);
    expect(service).toBeTruthy();
  });
});
