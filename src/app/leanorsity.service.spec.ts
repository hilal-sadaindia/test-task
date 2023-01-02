import { TestBed } from '@angular/core/testing';

import { LeanorsityService } from './leanorsity.service';

describe('LeanorsityService', () => {
  let service: LeanorsityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeanorsityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
