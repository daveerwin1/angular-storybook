import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrngCardComponent } from './lrng-card.component';

describe('LrngCardComponent', () => {
  let component: LrngCardComponent;
  let fixture: ComponentFixture<LrngCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrngCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrngCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
