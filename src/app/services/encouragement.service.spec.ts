import { TestBed } from '@angular/core/testing';

import { EncouragementService } from './encouragement.service';

describe('EncouragementService', () => {
  let service: EncouragementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncouragementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
