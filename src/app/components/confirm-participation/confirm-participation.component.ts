import { Component, OnInit, Input } from '@angular/core';
0;

@Component({
  selector: 'app-confirm-participation',
  templateUrl: './confirm-participation.component.html',
  styleUrls: ['./confirm-participation.component.css'],
})
export class ConfirmParticipationComponent implements OnInit {
  onSend({ value, valid }) {
    if (valid) {
      console.log(value);
    } else {
      console.log('not valid');
    }
  }
  @Input()
  TableMember = {
    GuestId: '',
    FriendId: '',
    likeOrNot: '',
  };
  seeInvitation() {
    //אפשרות לצפות בהזמנה
  }
  confirm() {
    //שליחת הנתונים לדטה בייס
  }
  navigateToPlace() {
    //שהאורח יוכל לצפות במקומו-רק כאשר מוכן
  }
  constructor() {}

  ngOnInit(): void {}
}
