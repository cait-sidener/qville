import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Precipitation17MapComponent } from './precipitation17-map.component';

describe('Precipitation17MapComponent', () => {
  let component: Precipitation17MapComponent;
  let fixture: ComponentFixture<Precipitation17MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Precipitation17MapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Precipitation17MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
