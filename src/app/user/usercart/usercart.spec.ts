import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercart } from './usercart';

describe('Usercart', () => {
  let component: Usercart;
  let fixture: ComponentFixture<Usercart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Usercart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usercart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
