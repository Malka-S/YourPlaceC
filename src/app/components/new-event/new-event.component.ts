import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../model/event.model';
import { BaseCode } from '../../model/baseCode';
import { EventService } from '../../service/EventService';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from 'src/app/service/AppService';

//import * as XLSX from 'xlsx'
// import * as XLSX from 'ts-xlsx';
// const { read, write, utils } = XLSX;

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
  providers: [AppService, EventService]
})
export class NewEventComponent implements OnInit {

  @Input()
  // event: Event;
  eventTypeList: BaseCode[];
  public form: FormGroup;
  _selectedEvent: Event = new Event();
  get selectedUser() {
    return this._selectedEvent;
  }

  date3: Date;
  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }
  constructor(private eventService: EventService, private router: Router, private fb: FormBuilder) {
    // ssthis.crateForm()

  }

  ngOnInit() {
    this.eventService.getEventType().subscribe(data => {
      debugger;
      this.eventTypeList = data;
    });
  }
  crateForm() {
    this.form = this.fb.group({
      EventName: [this._selectedEvent.EventName, Validators.compose([Validators.required])],
      EventType: [this._selectedEvent.EventType],
      Invitation: [this._selectedEvent.Invitation, Validators.compose([Validators.required])],
    })
  }
  save(): void {
    this.eventService.updateEvent(this.form.value)
      .subscribe();
  }
  add(): void {
    this.eventService.addEvent(this.form.value).subscribe();
    //  .subscribe(hero => {
    //   this.userService.push(this.User.firstName);
    // });

  }

  Upload() {
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
  } // }
  onSend({ value, valid }) {
    if (valid) {
      console.log(value);
    } else {
      console.log('not valid');
    }
  }
  // navigate() {
  //   this.router.navigate(['app-new-event2']);

  uploadedFiles: any[] = [];


  new() { }
  // onUpload(event) {
  //   for (let file of event.files) {
  //     this.uploadedFiles.push(file);
  //   }
  // }
}
