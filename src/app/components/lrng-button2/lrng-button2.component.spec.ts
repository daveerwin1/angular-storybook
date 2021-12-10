import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrngButton2Component } from './lrng-button2.component';

describe('LrngButton2Component', () => {
  let component: LrngButton2Component;
  let fixture: ComponentFixture<LrngButton2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrngButton2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrngButton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
