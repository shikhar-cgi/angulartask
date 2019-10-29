import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compon3Component } from './compon3.component';

describe('Compon3Component', () => {
  let component: Compon3Component;
  let fixture: ComponentFixture<Compon3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compon3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compon3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
