import { Component, Input } from '@angular/core';
import { Event } from '../../model/event.model';
import { MyserverService } from '../../service/EventService';
import { Router } from '@angular/router';
//import * as XLSX from 'xlsx';
// import * as XLSX from 'ts-xlsx';
// const { read, write, utils } = XLSX;

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
})
export class NewEventComponent {
  @Input()
  event: Event;
  // event: Event = {
  //   EventCode: 0,
  //   EventType: '',
  //   EventName: '',
  //   EventDate: '',
  //   EventDueDate: '',
  //   ManagerCode: 0,
  //   SeatingArrangementCode: 0,
  //   GuestCode: 0,
  //   Invitation: '',
  // };
  messageService: any;
  date3: Date;
  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
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

  constructor(private myserver: MyserverService, private router: Router) {}

  new() {}
  // onUpload(event) {
  //   for (let file of event.files) {
  //     this.uploadedFiles.push(file);
  //   }
  // }
}
