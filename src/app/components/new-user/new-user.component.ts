import { Component, OnInit } from '@angular/core';
import {UserService}from '../../service/UserService';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers:[UserService]
})
export class NewUserComponent {
  public form: FormGroup;
  _selectedUser: User = new User();

  get selectedUser() {
    return this._selectedUser;
  }

  onSend({ value, valid }) {
    if (valid) {
      console.log(value);
    } else {
      console.log('not valid');
    }
  }
  constructor(private userService:UserService, private fb: FormBuilder) {
    this.crateForm()
  }

  save(): void {
    this.userService.updateUser(this.form.value)
      .subscribe();
  }
  
  crateForm() {
    this.form = this.fb.group({
      user_first_name: [this.selectedUser.user_first_name, Validators.compose([Validators.required])],
      user_last_name: [this.selectedUser.user_last_name],
      user_phone_number:[this.selectedUser.user_phone_number,Validators.pattern('0-9')],
      user_email: [this.selectedUser.user_email, Validators.compose([Validators.email, Validators.required])]
    })
  }

  add(): void {
    this.userService.addUser(this.form.value).subscribe();
      //  .subscribe(hero => {
      //   this.userService.push(this.User.firstName);
      // });
     
  }
}
