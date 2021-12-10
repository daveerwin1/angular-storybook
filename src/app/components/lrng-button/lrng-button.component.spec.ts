import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrngButtonComponent } from './lrng-button.component';

describe('LrngButtonComponent', () => {
  let component: LrngButtonComponent;
  let fixture: ComponentFixture<LrngButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrngButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrngButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button click', () => {
    component.handleClick();
    expect(component.label).toEqual('clicked!');
  });
});
