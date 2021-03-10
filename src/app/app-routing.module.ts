import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router'
import { NewEventComponent } from './components/new-event/new-event.component';
import { NewEvent2Component } from './components/new-event-two/new-event2.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ConfirmParticipationComponent } from './components/confirm-participation/confirm-participation.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { LoginComponent } from './components/login/login.component';
import { AddGuestComponent } from './guest/add-guest/add-guest.component';
import { EditGuestComponent } from './guest/edit-guest/edit-guest.component';
import { ListGuestsComponent } from './guest/list-guests/list-guests.component';
import { UploadXlComponent } from './guest/upload-xl/upload-xl.component';
import { ReminderService } from 'src/app/service/reminders.service';
import{SeatingArrangementComponent}from './components/seating-arrangement/seating-arrangement.component'

//import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'new-event', component: NewEventComponent },
      { path: 'new-event2', component: NewEvent2Component },
      { path: 'reminders', component: RemindersComponent },
      { path: 'confirm-participation', component: ConfirmParticipationComponent },
      { path: 'new-user', component: NewUserComponent },
      { path: 'login', component: LoginComponent },
{path:'upload-xl',component:UploadXlComponent},
      { path: 'add-guest', component: AddGuestComponent },
      { path: 'edit-guest', component: EditGuestComponent },
      { path: 'list-guests', component: ListGuestsComponent },
      { path: 'seating-arrangement', component: SeatingArrangementComponent },


      
      // fallbackRoute,
      // indexRoute
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
