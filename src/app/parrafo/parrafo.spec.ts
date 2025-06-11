import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parrafo } from './parrafo';

describe('Parrafo', () => {
  let component: Parrafo;
  let fixture: ComponentFixture<Parrafo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parrafo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parrafo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
