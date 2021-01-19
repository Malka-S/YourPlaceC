import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BaseCode } from 'src/app/model/baseCode';
import { Guest } from '../../model/guest.model';
import { GuestService } from '../../service/guest.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {

  
  addForm: FormGroup;
  guestCatagoryList: BaseCode[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
     private router: Router, 
      private guestService: GuestService,
     ) { }
  // public dialogRef: MatDialogRef<AddGuestComponent>,
  // @Inject(MAT_DIALOG_DATA) public data: BaseCode) {
  // console.log(data);
  // }

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
        // this.guestCatagoryList = this.newEvent2.getcategoryList();


  }
  
  AddGuest(guest:Guest):void{
    this.guestService.AddGuest(guest).subscribe(
    response=>{console.log(response);
      guest = response;
    },
    error=>{ console.log(error);
    }) 
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
