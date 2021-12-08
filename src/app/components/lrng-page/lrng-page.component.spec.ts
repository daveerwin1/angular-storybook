import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrngPageComponent } from './lrng-page.component';

describe('LrngPageComponent', () => {
  let component: LrngPageComponent;
  let fixture: ComponentFixture<LrngPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrngPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrngPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
