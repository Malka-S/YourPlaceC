import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.server';


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
  TableMember1 = {
    GuestId: '',
    FriendId: '',
    likeOrNot: '',
  };
  TableMember2 = {
    GuestId: '',
    FriendId: '',
    likeOrNot: '',
  };
  TableMember3 = {
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
  // constructor(
  //   private formBuilder: FormBuilder,
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private authenticationService: AuthenticationService //private alertService: AlertService
  // ) {
  //   // redirect to home if already logged in
  //   if (this.authenticationService.currentUserValue) {
  //     this.router.navigate(['/']);
  //   }
  // }
  ngOnInit(): void {}
}
