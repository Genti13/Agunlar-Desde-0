import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogManager } from './log-manager';

describe('LogManager', () => {
  let component: LogManager;
  let fixture: ComponentFixture<LogManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
