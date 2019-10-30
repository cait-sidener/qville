import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilPermeabilityMapsComponent } from './soil-permeability-maps.component';

describe('SoilPermeabilityMapsComponent', () => {
  let component: SoilPermeabilityMapsComponent;
  let fixture: ComponentFixture<SoilPermeabilityMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoilPermeabilityMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilPermeabilityMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
