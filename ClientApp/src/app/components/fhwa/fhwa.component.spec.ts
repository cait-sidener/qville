import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FhwaComponent } from './fhwa.component';

describe('FhwaComponent', () => {
  let component: FhwaComponent;
  let fixture: ComponentFixture<FhwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FhwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FhwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
