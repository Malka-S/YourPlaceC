import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { NewEvent2Component } from './components/new-event-two/new-event2.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmParticipationComponent } from './components/confirm-participation/confirm-participation.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { RouterModule, RouterState, Routes } from '@angular/router';
//import { myServer } from './service';
//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
//import {MenuItem} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    NewEventComponent,
    NewEvent2Component,
    ConfirmParticipationComponent,
    RemindersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    // myServer
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
