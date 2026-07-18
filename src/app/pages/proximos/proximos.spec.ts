import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proximos } from './proximos';

describe('Proximos', () => {
  let component: Proximos;
  let fixture: ComponentFixture<Proximos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proximos],
    }).compileComponents();

    fixture = TestBed.createComponent(Proximos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
