import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Precipitation15MapComponent } from './precipitation15-map.component';

describe('Precipitation15MapComponent', () => {
  let component: Precipitation15MapComponent;
  let fixture: ComponentFixture<Precipitation15MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Precipitation15MapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Precipitation15MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
