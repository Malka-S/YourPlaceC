import { Component, OnInit, Inject } from '@angular/core';
import { Guest } from '../../model/guest.model';
import { Router } from "@angular/router";
import { GuestService } from '../../service/guest.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-guests',
  templateUrl: './list-guests.component.html',
  styleUrls: ['./list-guests.component.css']
})
export class ListGuestsComponent implements OnInit {

  guests: Guest[];
  guest: Guest;

  constructor(private router: Router, private guestService: GuestService,private http: HttpClient) { 
    //פונקצית קריאה לרשימה של כל האורחים-שיטען מיד עם טעינת הקומפוננטה
    this.guestService.getAllGuests().subscribe(
      response=>{console.log(response);
        this.guests=response;
      },
      error=>{ console.log(error);
      })
  }

  ngOnInit() {}
   //?
  deleteGuest(guest: Guest): void {
    this.guests = this.guests.filter(u => u !== guest);
    this.guestService.deleteGuest(guest.guest_id)
      .subscribe( data => {
        this.guests = this.guests.filter(u => u !== guest);
      })
   };

  addGuest(): void {
    this.router.navigate(['add-guest']);
  };
  //או שעורכים בקומפוננטה הזאת
    editGuest(guest:Guest):void{
    this.guestService.updateGuest(guest).subscribe(
    response=>{console.log(response);
      this.guest=response;
    },
    error=>{ console.log(error);
    }) 
  }
  //לכאורה אמור לשלוח בניתוב גם את האורח שאמור לערוך
  // editGuest():void{
  //   this.router.navigate(['edit-guest']);
  // }

  //הפונקציה נכתבה בתוך הקונסטרקטור כי אמור לעלות מיד עם טעינה
// getGuests():void{
// this.guestService.getAllGuests().subscribe(
// response=>{console.log(response);
//   this.guest=response;
// },
// error=>{ console.log(error);
// })
//}
  
}
