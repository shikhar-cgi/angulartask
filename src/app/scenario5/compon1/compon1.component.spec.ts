import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compon1Component } from './compon1.component';

describe('Compon1Component', () => {
  let component: Compon1Component;
  let fixture: ComponentFixture<Compon1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compon1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
