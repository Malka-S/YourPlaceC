import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-event2',
  templateUrl: './new-event2.component.html',
  styleUrls: ['./new-event2.component.css'],
})
export class NewEvent2Component implements OnInit {
  Table = {
    TableType: '',
    AmountOfPlaces: '',
  };
  onSend({ value, valid }) {
    if (valid) {
      console.log(value);
    } else {
      console.log('not valid');
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
