import { Component, Input, OnInit } from '@angular/core';
import { TemplateRef, ElementRef } from '@angular/core';
import { Event } from '../../model/event.model';
import { BaseCode } from '../../model/baseCode';
import { EventService } from '../../service/EventService';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AuthenticationService } from '../../service/authentication.server';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
// const { read, write, utils } = XLSX;

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
  providers: [EventService],
})
export class NewEventComponent implements OnInit {
  // @Input()
 
  creatEvent = new FormGroup({});
  eventTypeList: BaseCode[] = [];
  EventTypeId:Number=0;
  shortLink: string = ""; 
  loading: boolean = false; // Flag variable 
  file: File = null; // Variable to store file 
  // isLinear = false;
  private isUploadBtn: boolean = true;  


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    public eventService:EventService //private alertService: AlertService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    console.log(this.eventService);
    this.eventService.getEventType().subscribe((data) =>{this.eventTypeList=data;});
    this.creatEvent = this.formBuilder.group({
      event_id:8,
      user_id:8461,
      event_des: ['', Validators.required],
      event_date: ['', Validators.required],
      event_type_id: ['', Validators.required],
      due_date: ['', Validators.required],
      invitation_file:['', Validators.required],
      num_tables: ['', Validators.required],
      num_places_around_a_table: ['', Validators.required]
    });
  }

 onChange(event) { 
  this.file = event.target.files[0]; 
} 
get EventType() {
  
 
  return this.creatEvent.get('EventType');
}
// OnClick of button Upload 
onUpload() { 
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
  onSubmit() {
    // this.router.navigateByUrl('/new-event2');
    console.log("jkjkjk" ,this.creatEvent.value);
    // this.router.navigate(['new-event2']);

    // this.eventService.createEvent(this.creatEvent.value) .subscribe( data => {
    // });
    this.AddEvent(this.creatEvent.value)
    // this.router.navigate(['new-event2']);
  }
  AddEvent(event:Event):void{
    this.eventService.createEvent(event).subscribe(
    response=>{console.log(response);
      event = response;
    },
    error=>{ console.log(error);
    }) 
  }
  
  // onSend({ value, valid }) {
  //   if (valid) {
  //     console.log(value);
  //   } else {
  //     console.log('not valid');
  //   }
  // }

   
}
