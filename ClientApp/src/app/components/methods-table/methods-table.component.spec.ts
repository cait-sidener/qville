import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsTableComponent } from './methods-table.component';

describe('MethodsTableComponent', () => {
  let component: MethodsTableComponent;
  let fixture: ComponentFixture<MethodsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
