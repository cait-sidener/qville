import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensitiesThirteenComponent } from './intensities-thirteen.component';

describe('IntensitiesThirteenComponent', () => {
  let component: IntensitiesThirteenComponent;
  let fixture: ComponentFixture<IntensitiesThirteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntensitiesThirteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensitiesThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
