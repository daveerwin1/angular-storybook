import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrngPageComponent } from './lrng-page.component';
import {LrngCardComponent} from "../lrng-card/lrng-card.component";

describe('LrngPageComponent', () => {
  let component: LrngPageComponent;
  let fixture: ComponentFixture<LrngPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrngPageComponent, LrngCardComponent ]
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
