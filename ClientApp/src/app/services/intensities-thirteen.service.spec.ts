import { TestBed } from '@angular/core/testing';

import { IntensitiesThirteenService } from './intensities-thirteen.service';

describe('IntensitiesThirteenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntensitiesThirteenService = TestBed.get(IntensitiesThirteenService);
    expect(service).toBeTruthy();
  });
});
