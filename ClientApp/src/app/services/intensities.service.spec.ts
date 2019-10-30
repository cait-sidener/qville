import { TestBed } from '@angular/core/testing';

import { IntensitiesService } from './intensities.service';

describe('IntensitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntensitiesService = TestBed.get(IntensitiesService);
    expect(service).toBeTruthy();
  });
});
