import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RationalComponent } from './rational.component';

describe('RationalComponent', () => {
  let component: RationalComponent;
  let fixture: ComponentFixture<RationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
