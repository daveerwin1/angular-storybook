import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrngPage2Component } from './lrng-page2.component';
import {LrngCard2Component} from "../lrng-card2/lrng-card2.component";
import {LrngButtonComponent} from "../lrng-button/lrng-button.component";

describe('LrngPageComponent', () => {
  let component: LrngPage2Component;
  let fixture: ComponentFixture<LrngPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrngPage2Component, LrngCard2Component, LrngButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrngPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
