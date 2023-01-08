import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearlyCalendarComponent } from './yearly-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    YearlyCalendarComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule
  ],
  exports:[YearlyCalendarComponent]
})
export class YearlyCalendarModule { 

}
