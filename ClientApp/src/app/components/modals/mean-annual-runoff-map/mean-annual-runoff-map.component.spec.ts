import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanAnnualRunoffMapComponent } from './mean-annual-runoff-map.component';

describe('MeanAnnualRunoffMapComponent', () => {
  let component: MeanAnnualRunoffMapComponent;
  let fixture: ComponentFixture<MeanAnnualRunoffMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeanAnnualRunoffMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanAnnualRunoffMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
