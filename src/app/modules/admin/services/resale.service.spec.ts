import { TestBed } from '@angular/core/testing';

import { ResaleService } from './resale.service';

describe('ResaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResaleService = TestBed.get(ResaleService);
    expect(service).toBeTruthy();
  });
});
