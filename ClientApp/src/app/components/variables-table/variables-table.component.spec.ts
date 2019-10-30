import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesTableComponent } from './variables-table.component';

describe('VariablesTableComponent', () => {
  let component: VariablesTableComponent;
  let fixture: ComponentFixture<VariablesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
