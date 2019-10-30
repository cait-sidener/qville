import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitestudyComponent } from './sitestudy.component';

describe('SitestudyComponent', () => {
  let component: SitestudyComponent;
  let fixture: ComponentFixture<SitestudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitestudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
