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
// import { Observable } from 'rxjs/Rx';  
//import * as XLSX from 'xlsx'
// import * as XLSX from 'ts-xlsx';
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
  shortLink: string = ""; 
  loading: boolean = false; // Flag variable 
  file: File = null; // Variable to store file 
  private isUploadBtn: boolean = true;  

  // categoryTable = [];
  // date3: Date;
  // arrayBuffer: any;
  // parameter: number = 2;
  // event: Event;

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
      EventId:[],
      EventDes: ['', Validators.required],
      EventDate: ['', Validators.required],
      EventType: ['', Validators.required],
      EventDueDate: ['', Validators.required],
      Invitation:this.onUpload.name,
      NumTables: ['', Validators.required],
      NumPlacesAroundATable: ['', Validators.required]
    });
  }

 onChange(event) { 
  this.file = event.target.files[0]; 
} 

// OnClick of button Upload 
onUpload() { 
  this.loading = !this.loading; 
  console.log(this.file); 
  // this.eventService.upload(this.file).subscribe( 
  //     (event: any) => { 
  //         if (typeof (event) === 'object') { 

  //             // Short link via api response 
  //             this.shortLink = event.link; 

  //             this.loading = false; // Flag variable  
  //         } 
  //     } 
  // ); 
} 
  onSubmit() {
    // this.router.navigate(['new-event2']);
    // this.router.navigateByUrl('/new-event2');
    this.eventService.createEvent(this.creatEvent.value) .subscribe( data => {
      this.router.navigate(['new-event2']);
    });
  }
  // incomingfile(event) {
  //   this.file = event.target.files[0];
  // }
  
  // onSend({ value, valid }) {
  //   if (valid) {
  //     console.log(value);
  //   } else {
  //     console.log('not valid');
  //   }
  // }

  // uploadedFiles: any[] = [];

  // new() { }
  
}
