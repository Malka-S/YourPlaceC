import { Component, OnInit, Inject } from '@angular/core';
import { Guest } from '../../model/guest.model';
import { Router } from "@angular/router";
import { GuestService } from '../../service/guest.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BaseCode } from 'src/app/model/baseCode';
// import { NewEvent2Component } from 'new-event-three/new-event-three.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewEventThreeComponent } from 'src/app/components/new-event-three/new-event-three.component';
import { NewEvent2Component } from 'src/app/components/new-event-two/new-event2.component';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {

  catagoryList:BaseCode[]=[];
  constructor(
    private formBuilder: FormBuilder,
     private router: Router, 
      private guestService: GuestService,
     ) { }
  // public dialogRef: MatDialogRef<AddGuestComponent>,
  // @Inject(MAT_DIALOG_DATA) public data: BaseCode) {
  // console.log(data);
  // }

  addForm: FormGroup;
  guestCatagoryList: BaseCode[] = [];
  ngOnInit() {
    // this.guestService.getCatagoryList().subscribe((data) =>{this.catagoryList=data;});

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

  onSubmit() {
    // this.router.navigateByUrl('/list-guest');
    this.router.navigate(['/list-guests']);

    // this.guestService.createGuest(this.addForm.value)
    //   .subscribe( data => {
    //     this.router.navigate(['list-guest']);
    //   });
  }








}
