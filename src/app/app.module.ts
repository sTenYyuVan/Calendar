import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YearlyCalendarModule } from './yearly-calendar/yearly-calendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YearlyCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
