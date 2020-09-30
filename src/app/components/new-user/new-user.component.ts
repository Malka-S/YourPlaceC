import { Component, OnInit } from '@angular/core';
import {UserService}from '../../service/UserService';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers:[UserService]
})
export class NewUserComponent implements OnInit {
  [x: string]: any;
  user: User;
  
  onSend({ value, valid }) {
    if (valid) {
      console.log(value);
    } else {
      console.log('not valid');
    }
  }
  constructor(private userService:UserService) {}

  ngOnInit(): void {}
  save(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }
  add(user_first_name: string,user_last_name:string,user_email:string,user_password:string,user_phone_number:string): void {
    user_first_name = this.user.user_first_name.trim();
    user_last_name =this.user.user_last_name.trim();
    user_email =this.user.user_email.trim();
    user_password =this.user.user_password.trim();
    user_phone_number =this.user.user_phone_number.trim();
    

    if (!user_first_name) { return; }
    this.userService.addUser({user_first_name} as User).toPromise().then(data=> this.user.user_first_name);
      //  .subscribe(hero => {
      //   this.userService.push(this.User.firstName);
      // });
     
     
  }
}
