import { TestBed } from '@angular/core/testing';

import { UsgsReportService } from './usgs-report.service';

describe('UsgsReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsgsReportService = TestBed.get(UsgsReportService);
    expect(service).toBeTruthy();
  });
});
