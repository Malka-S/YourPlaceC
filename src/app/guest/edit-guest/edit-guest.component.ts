import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {GuestService}from '../../service/guest.service';
import {first} from "rxjs/operators";
import { Guest } from 'src/app/model/guest.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.css']
})
export class EditGuestComponent implements OnInit {

  guest: Guest;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private guestService: GuestService,private http: HttpClient) { }

  ngOnInit() {
    let guestId = window.localStorage.getItem("editGuestId");
    if(!guestId) {
      alert("Invalid action.")
      this.router.navigate(['list-guests']);
      return;
    }
    this.editForm = this.formBuilder.group({
      guest_id: [],
      guest_last_name: ['', Validators.required],
      guest_first_name: ['', Validators.required],
      guest_tz: ['', Validators.required],
      guest_email: ['', Validators.required],
      gender: ['', Validators.required],
      guest_message_befor: ['', Validators.required],
      guest_message_after: ['', Validators.required]
    });
    // this.guestService.getGuestById(+guestId)
    //   .subscribe( data => {
    //     this.editForm.setValue(data.result);
    //   });
  }

  onSubmit() { 
    this.router.navigate(['list-guests']);
  }
    
    EditGuest(guest:Guest):void{
      this.guestService.updateGuest(guest).subscribe(
      response=>{console.log(response);
        this.guest=response;
      },
      error=>{ console.log(error);
      }) 
    }
}
