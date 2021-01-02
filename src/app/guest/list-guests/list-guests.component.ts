import { Component, OnInit, Inject } from '@angular/core';
import { Guest } from '../../model/guest.model';
import { Router } from "@angular/router";
import { GuestService } from '../../service/guest.service';

@Component({
  selector: 'app-list-guests',
  templateUrl: './list-guests.component.html',
  styleUrls: ['./list-guests.component.css']
})
export class ListGuestsComponent implements OnInit {

  guests: Guest[];
  constructor(private router: Router, private guestService: GuestService) { }

  ngOnInit() {
    // if(!window.localStorage.getItem('token')) {
    //   this.router.navigate(['login']);
    //   return;
    // }
    // this.guestService.getGuest()
    //   .subscribe( data => {
    //     this.guests = data.result;
    //   });
  }
  deleteGuest(guest: Guest): void {
    this.guests = this.guests.filter(u => u !== guest);

    // this.guestService.deleteGuest(guest.guest_id)
    //   .subscribe( data => {
    //     this.guests = this.guests.filter(u => u !== guest);
    //   })
  };

  editGuest(guest: Guest): void {
    window.localStorage.removeItem("editGuestId");
    window.localStorage.setItem("editGuestId", guest.guest_first_name.toString());
    this.router.navigate(['edit-guest']);
  };

  addGuest(): void {
    this.router.navigate(['add-guest']);
  };

}
