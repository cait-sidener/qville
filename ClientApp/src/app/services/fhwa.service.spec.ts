import { TestBed } from '@angular/core/testing';

import { FhwaService } from './fhwa.service';

describe('FhwaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FhwaService = TestBed.get(FhwaService);
    expect(service).toBeTruthy();
  });
});
