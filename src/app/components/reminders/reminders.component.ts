import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/EventService';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css'],
})
export class RemindersComponent implements OnInit {
  shortLink: string = ""; 
  loading: boolean = false; // Flag variable 
  file: File = null; // Variable to store file 
  // isLinear = false;
  private isUploadBtn: boolean = true;  
  onSend({ value, valid }) {
    if (valid) {
      console.log(value);
    } else {
      console.log('not valid');
    }
  }
  constructor(public eventService:EventService ) {}

  ngOnInit(): void {}
  sendInvitationToAll():void{};
  sendReminderToAll():void{};
  onChange(event) { 
    this.file = event.target.files[0]; 
  } 
  // OnClick of button Upload 
  onUploadReminder() { 
  this.loading = !this.loading; 
  console.log(this.file); 
  this.eventService.upload(this.file).subscribe( 
      (event: any) => { 
          if (typeof (event) === 'object') { 

              // Short link via api response 
              // this.shortLink = event.link; 

              this.loading = false; // Flag variable  
          } 
      } 
  ); 
} 
}
