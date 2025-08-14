import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usernavbar } from './usernavbar';

describe('Usernavbar', () => {
  let component: Usernavbar;
  let fixture: ComponentFixture<Usernavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Usernavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usernavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
