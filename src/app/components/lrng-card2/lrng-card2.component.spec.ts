import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrngCard2Component } from './lrng-card2.component';
import {LrngButtonComponent} from "../lrng-button/lrng-button.component";

describe('LrngCard2Component', () => {
  let component: LrngCard2Component;
  let fixture: ComponentFixture<LrngCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrngCard2Component, LrngButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrngCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
