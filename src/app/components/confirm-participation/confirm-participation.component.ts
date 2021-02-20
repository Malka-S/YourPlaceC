import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
// import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.server';
import { GuestService } from '../../service/guest.service';
import { Guest } from '../../model/guest.model';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { TM } from 'src/app/model/TM.model';
import { TMVM} from 'src/app/model/TMVM.model';

import { toNumber } from 'lodash';
import { TmplAstVariable } from '@angular/compiler';
import { SelectionModel } from '@angular/cdk/collections';
import { element } from 'protractor';


@Component({
  selector: 'app-confirm-participation',
  templateUrl: './confirm-participation.component.html',
  styleUrls: ['./confirm-participation.component.css'],
})
export class ConfirmParticipationComponent implements OnInit {
  category:'חברות כלה';
  guests: Guest[];
  subscription: Subscription;
  private routeSub: Subscription;
  checked: boolean = false;
  g3_toSend:TM[];
  guest_3TM:TM[];
  VTMListToSend:TMVM[]=[];
  VTMList:TMVM[] = [];
  VTM:TMVM = {};
  id:any;
  // options = new FormControl();
  options: any;
  optionSelected : any;
  selection = new SelectionModel<Element>(true, []);

  // path: 'item/:id';
  //  component: ConfirmParticipationComponent;
 
  onSend({ value, valid }) {
    if (valid) {
      console.log(value);
    } else {
      console.log('not valid');
    }
  }
  ngOnInit(): void {

  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.subscription.unsubscribe()

  }
  constructor(
    private formBuilder: FormBuilder,
    // private formControl:FormControl,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private router: Router,
    private guestService: GuestService,
    private authenticationService: AuthenticationService //private alertService: AlertService
  ) {
   //פונקצית קריאה לרשימה של כל האורחים לפי קטגוריה-שיטען מיד עם טעינת הקומפוננטה
//לא מכיר את המשתנה של  this.category
//לבנתים
   this.guestService.getGuestByCategory('חברות כלה').subscribe(
     response=>{console.log(response);
       this.guests=response;
       console.log(JSON.stringify(response));

       this.guests.forEach(element => {
      this.VTM = {};
      this.VTM.guest_id = element.guest_id;
      this.VTM.tm_full_name = element.guest_first_name+' '+element.guest_last_name;
        this.VTMList.push(this.VTM);
      });

     },
     error=>{ console.log(error);
     })


    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
        // מבלומי ניסוי

      this.route.queryParams.subscribe(params => {       
          this.id = params['id'];
          console.log('from blumi  '+this.id) //log the value of id
      });
    
  }
  @Input()

  seeInvitation() {
    //אפשרות לצפות בהזמנה
  }
  confirm(VTMListToSend:TMVM):void {
    console.log('מה שקיבל מהHTML ',VTMListToSend);
    //ניסיתי להדפיס את האוביקט של 

    //שליחת הנתונים לדטה בייס
    //לא יודעת איך לשלוח את הבקשות שלם
    this.g3_toSend.forEach(element1 => {
     this.VTMListToSend.forEach(element2 => {
        element1.guest_id=element2.guest_id,
        element1.friend_id=element2.friend_id,
        element1.like_or_not=element2.like_or_not,
        element1.guestPriority=element2.guestPriority
      });
    });

    console.log('obj ',this.g3_toSend);
        this.guestService.AddTMList(this.g3_toSend).subscribe(
        response=>{console.log(response);
          this.guest_3TM=response;
        },
        error=>{ console.log(error);
        })
        
        
  }
  navigateToPlace() {
    //שהאורח יוכל לצפות במקומו-רק כאשר מוכן
  }

}
