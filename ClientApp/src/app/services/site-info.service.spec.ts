import { TestBed } from '@angular/core/testing';

import { SiteInfoService } from './site-info.service';

describe('SiteInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteInfoService = TestBed.get(SiteInfoService);
    expect(service).toBeTruthy();
  });
});
