import { TestBed } from '@angular/core/testing';

import { CyrGridService } from './cyr-grid.service';

describe('CyrGridService', () => {
  let service: CyrGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyrGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
