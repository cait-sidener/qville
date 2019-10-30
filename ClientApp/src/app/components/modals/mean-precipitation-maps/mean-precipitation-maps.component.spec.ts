import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanPrecipitationMapsComponent } from './mean-precipitation-maps.component';

describe('MeanPrecipitationMapsComponent', () => {
  let component: MeanPrecipitationMapsComponent;
  let fixture: ComponentFixture<MeanPrecipitationMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeanPrecipitationMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanPrecipitationMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
