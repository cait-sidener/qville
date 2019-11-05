import { TestBed } from '@angular/core/testing';

import { RationalService } from './rational.service';

describe('RationalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RationalService = TestBed.get(RationalService);
    expect(service).toBeTruthy();
  });
});
