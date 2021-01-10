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
  constructor(private router: Router, private guestService: GuestService,private http: HttpClient) { }

  ngOnInit() {}
   //?
  deleteGuest(guest: Guest): void {
    this.guests = this.guests.filter(u => u !== guest);
    this.guestService.deleteGuest(guest.guest_id)
      .subscribe( data => {
        this.guests = this.guests.filter(u => u !== guest);
      })
  };
//?
  // editGuest(guest: Guest): void {
  //   window.localStorage.removeItem("editGuestId");
  //   window.localStorage.setItem("editGuestId", guest.guest_first_name.toString());
  //   this.router.navigate(['edit-guest']);
  // }; 
  editGuest(guest: Guest): Observable<Guest[]> {
    let url = 'https://localhost:44390/api/Guest/PostGuest';
    return this.http.post<Guest[]>(url, Guest);
  }
  addGuest(): void {
    this.router.navigate(['add-guest']);
  };
  //  מהשרת אמור לקבל את האורח ולמחוק אותו
  // deleteGuest(id: number): Observable<any[]> {
  //   return this.http.delete<any[]>('https://localhost:44390/api/Guest/DeleteGuest',id);
  // }
  getAllGuests(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:44390/api/Guest/SelectGuests');
  }
}
