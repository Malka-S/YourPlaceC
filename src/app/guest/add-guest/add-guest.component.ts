import { Component,Input, OnInit } from '@angular/core';
import { Guest } from '../../model/guest.model';
import { Router } from "@angular/router";
import { GuestService } from '../../service/guest.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {
  @Input()
  guest: Guest;
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private guestService: GuestService,private http: HttpClient) { }
  

  ngOnInit() {
 
    this.addForm = this.formBuilder.group({
      guest_id: [],
      guest_last_name: ['', Validators.required],
      guest_first_name: ['', Validators.required],
      guest_tz: ['', Validators.required],
      guest_email: ['', Validators.required],
      gender: ['', Validators.required],
      guest_message_befor: ['', Validators.required],
      guest_message_after: ['', Validators.required]
    });
  }
  
  AddGuest(guest:Guest):void{
    this.guestService.AddGuest(guest).subscribe(
    response=>{console.log(response);
      this.guest=response;
    },
    error=>{ console.log(error);
    }) 
  }
  onSubmit() {
  // this.router.navigateByUrl('/list-guest');
  this.router.navigate(['list-guest']);
  }
  
}
