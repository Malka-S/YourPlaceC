import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewEventComponent } from './components/new-event/new-event.component';
import { NewEvent2Component } from './components/new-event-two/new-event2.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ConfirmParticipationComponent } from './components/confirm-participation/confirm-participation.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component'

const routes: Routes = [
  { path: 'new-event', component: NewEventComponent },
  { path: 'new-event2', component: NewEvent2Component },
  { path: 'reminders', component: RemindersComponent },
  { path: 'confirm-participation', component: ConfirmParticipationComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
