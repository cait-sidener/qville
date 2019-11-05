import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsgsReportComponent } from './usgs-report.component';

describe('UsgsReportComponent', () => {
  let component: UsgsReportComponent;
  let fixture: ComponentFixture<UsgsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsgsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsgsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
