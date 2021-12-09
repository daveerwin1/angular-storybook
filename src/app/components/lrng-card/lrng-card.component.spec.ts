import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrngCardComponent } from './lrng-card.component';
import {LrngButtonComponent} from "../lrng-button/lrng-button.component";

describe('LrngCardComponent', () => {
  let component: LrngCardComponent;
  let fixture: ComponentFixture<LrngCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrngCardComponent, LrngButtonComponent ]
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
