import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrngPage2Component } from './lrng-page2.component';

describe('LrngPageComponent', () => {
  let component: LrngPage2Component;
  let fixture: ComponentFixture<LrngPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrngPage2Component ]
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
