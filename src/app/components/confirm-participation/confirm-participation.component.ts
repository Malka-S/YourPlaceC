import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.server';
import { GuestService } from '../../service/guest.service';
import { Guest } from '../../model/guest.model';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { TM } from 'src/app/model/TM.model';
import { toNumber } from 'lodash';


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
  guest_3TM: TM[];
  g_3:TM;
  id:any;
 options = new FormControl();

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

    //ניסוי
    const appRoutes: Routes = [
      { path: '', component: ConfirmParticipationComponent }, {
        path: ':id', component: ConfirmParticipationComponent
      ,}];
          //ניסוי

    this.routeSub = this.route.params.subscribe(params => {
      console.log('parameter'+params) //log the entire params object
      console.log('id0 '+params['id']) //log the value of id
      console.log('rout  '+this.routeSub) //log the value of id

    });
        //ניסוי

    this.subscription = this.route.params.subscribe(params => {
      const id3 = params['id']
      console.log('id3 '+id3) //log the value of id

    })
        //ניסוי

    const id = this.route.snapshot.paramMap.get('id');
    console.log('id1 '+id) //log the value of id
        //ניסוי

    const id2 = this.route.snapshot.params.id // any param name after "params"
    console.log('id2 '+id2) //log the value of id
        //ניסוי

    const id4 = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('activatedRoute id4 '+id4) //log the value of id

  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.subscription.unsubscribe()

  }
  constructor(
    private formBuilder: FormBuilder,
    private formControl:FormControl,
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
     },
     error=>{ console.log(error);
     })


//לא מקבל שום דבר מבשרת
    //  console.log('the guests ',this.guests)
 
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
        // מבלומי ניסוי

      this.route.queryParams.subscribe(params => {       
          this.id = params['id'];
          console.log('from blumi  '+params) //log the value of id
      });
    
  }
  @Input()

  seeInvitation() {
    //אפשרות לצפות בהזמנה
  }
  confirm(id_chose:number):void {
    console.log('מה שקיבל מהHTML ',id_chose);
    //ניסיתי להדפיס את האוביקט של 
    //console.log(this.formControl.this.options.value);

    //שליחת הנתונים לדטה בייס
    //לא יודעת איך לשלוח את הבקשות שלם
     this.g_3={
       table_members_id:null,
      guest_id:8885,
      friend_id:id_chose,
      like_or_not:true,
      guestPriority:3
    }
    console.log('obj ',this.g_3);
        this.guestService.AddTM(this.g_3).subscribe(
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
