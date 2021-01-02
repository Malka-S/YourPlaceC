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
import { MatSliderModule } from '@angular/material/slider';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AddGuestComponent } from './guest/add-guest/add-guest.component';
import { EditGuestComponent } from './guest/edit-guest/edit-guest.component';
import { ListGuestsComponent } from './guest/list-guests/list-guests.component';
//import { MaterialModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

//import { myServer } from './service';
//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
//import {MenuItem} from 'primeng/api';
//import '~bootstrap/dist/css/bootstrap.min.css';
//import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [
    AppComponent,
    NewEventComponent,
    NewEvent2Component,
    ConfirmParticipationComponent,
    RemindersComponent,
    NewUserComponent,
    LoginComponent,
    AddGuestComponent,
    EditGuestComponent,
    ListGuestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule
    // MatSliderModule
  ],
  providers: [
    // myServer
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
