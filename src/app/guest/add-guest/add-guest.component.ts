import { Component, OnInit } from '@angular/core';
import { Guest } from '../../model/guest.model';
import { Router } from "@angular/router";
import { GuestService } from '../../service/guest.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private guestService: GuestService) { }

  addForm: FormGroup;

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

  onSubmit() {
  // this.router.navigateByUrl('/list-guest');
  this.router.navigate(['list-guest']);

    // this.guestService.createGuest(this.addForm.value)
    //   .subscribe( data => {
    //     this.router.navigate(['list-guest']);
    //   });
  }
  


  

  
  

}
