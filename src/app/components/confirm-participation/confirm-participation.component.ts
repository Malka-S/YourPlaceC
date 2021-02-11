import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.server';
import { GuestService } from '../../service/guest.service';
import { Guest } from '../../model/guest.model';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-confirm-participation',
  templateUrl: './confirm-participation.component.html',
  styleUrls: ['./confirm-participation.component.css'],
})
export class ConfirmParticipationComponent implements OnInit {
  category:'חברות כלה';
  guests: Guest[];
  onSend({ value, valid }) {
    if (valid) {
      console.log(value);
    } else {
      console.log('not valid');
    }
  }

  ngOnInit(): void {}

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private guestService: GuestService,
    private authenticationService: AuthenticationService //private alertService: AlertService
  ) {
   //פונקצית קריאה לרשימה של כל האורחים לפי קטגוריה-שיטען מיד עם טעינת הקומפוננטה
   console.log('got to oninit')
//לא מכיר את המשתנה של  this.category

   this.guestService.getGuestByCategory('חברות כלה').subscribe(
     response=>{console.log(response);
       this.guests=response;
       console.log(JSON.stringify(response));
     },
     error=>{ console.log(error);
     })
//לא מקבל שום דבר מבשרת
     console.log('the guests ',this.guests)
 
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  @Input()

  seeInvitation() {
    //אפשרות לצפות בהזמנה
  }
  confirm() {
    //שליחת הנתונים לדטה בייס
    //לא יודעת איך לשלוח את הבקשות שלם
      // this.guestService.AddRequest(x).subscribe(
      // response=>{console.log(response);
      //   this.x=response;
      // },
      // error=>{ console.log(error);
      // })
      this.guestService
      
  }
  navigateToPlace() {
    //שהאורח יוכל לצפות במקומו-רק כאשר מוכן
  }

}
