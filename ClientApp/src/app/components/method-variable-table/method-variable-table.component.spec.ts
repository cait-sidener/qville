import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodVariableTableComponent } from './method-variable-table.component';

describe('MethodVariableTableComponent', () => {
  let component: MethodVariableTableComponent;
  let fixture: ComponentFixture<MethodVariableTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodVariableTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodVariableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
