import { TestBed, inject } from '@angular/core/testing';

import { SellersService } from './sellers.service';

describe('SellersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellersService]
    });
  });

  it('should be created', inject([SellersService], (service: SellersService) => {
    expect(service).toBeTruthy();
  }));
});
