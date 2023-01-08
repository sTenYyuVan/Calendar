import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyCalendarComponent } from './yearly-calendar.component';

describe('YearlyCalendarComponent', () => {
  let component: YearlyCalendarComponent;
  let fixture: ComponentFixture<YearlyCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearlyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
