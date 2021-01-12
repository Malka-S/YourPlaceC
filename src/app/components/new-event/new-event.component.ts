import { Component, Input, OnInit } from '@angular/core';
import { TemplateRef, ElementRef } from '@angular/core';
import { Event } from '../../model/event.model';
import { BaseCode } from '../../model/baseCode';
import { EventService } from '../../service/EventService';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AuthenticationService } from '../../service/authentication.server';
import { ActivatedRoute, Router } from '@angular/router';
//import * as XLSX from 'xlsx'
// import * as XLSX from 'ts-xlsx';
// const { read, write, utils } = XLSX;

// interface Task {
//   title: string,
//   is_canceled: boolean
// }
@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
  providers: [EventService],
})
export class NewEventComponent implements OnInit {
  @Input()
  event: Event;
  creatEvent = new FormGroup({});
  // numCategory:any;
  //eventService:EventService;

  categoryTable = [];
  eventTypeList: BaseCode[] = [];
  date3: Date;
  arrayBuffer: any;
  file: File;
  parameter: number = 2;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    public eventService:EventService //private alertService: AlertService
  ) {
    // this.eventService = new EventService();
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
    console.log(this.eventService);
    
    this.eventService.getEventType().subscribe((data) =>{this.eventTypeList=data;});
    // this.eventService.getEventType().subscribe((data) => {
    //       this.eventTypeList = data;
    //     });
       
  }
  // get f() {
  //   return this.creatEvent.controls;
  // }
  // get EventDes() {
  //   return this.creatEvent.get('EventDes')
  // }
  // get EventDate() {
  //   return this.creatEvent.get('EventDate')
  // }
  // get numCategory() {
  //   return this.creatEvent.get('numCategory')
  // }

  onSubmit() {
    this.router.navigateByUrl('/new-event2');
  }
  incomingfile(event) {
    this.file = event.target.files[0];
  }
  // constructor(private eventService: EventService){}
  //   //private router: Router) {}

  // ngOnInit() {
  //   // this.eventService.getEventType().subscribe((data) => {
  //   //   this.eventTypeList = data;
  //   // });
  //   // this.eventService.updateEventType(this.parameter).subscribe((data) => {
  //   //   alert(data);
  //   //});
  //   // .toPromise()
  //   // .then((data) => (this.messageService = data));
  // }
  // Upload() {
  //   let fileReader = new FileReader();
  //   fileReader.onload = (e) => {
  //     this.arrayBuffer = fileReader.result;
  //     var data = new Uint8Array(this.arrayBuffer);
  //     var arr = new Array();
  //     for (var i = 0; i != data.length; ++i)
  //       arr[i] = String.fromCharCode(data[i]);
  //     var bstr = arr.join('');
  //     var workbook = XLSX.read(bstr, { type: 'binary' });
  //     var first_sheet_name = workbook.SheetNames[0];
  //     var worksheet = workbook.Sheets[first_sheet_name];
  //     console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
  //   };
  //   fileReader.readAsArrayBuffer(this.file);
  // }

  onSend({ value, valid }) {
    if (valid) {
      console.log(value);
    } else {
      console.log('not valid');
    }
  }

  uploadedFiles: any[] = [];

  new() { }
  // onUpload(event) {
  //   for (let file of event.files) {
  //     this.uploadedFiles.push(file);
  //   }
  // }
}
