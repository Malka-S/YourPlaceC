import {  OnInit } from '@angular/core';
import {UserService}from '../../service/UserService';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MessageService } from "primeng/api";
import {Component,EventEmitter,Input,Output}from '@angular/core';
import { AppService } from 'src/app/service/AppService';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers:[AppService,UserService,MessageService]
})
export class NewUserComponent {
  public form: FormGroup;
  _selectedUser: User ;

  @Output()
  editUser:EventEmitter<User>=new EventEmitter<User>();
  get selectedUser():User {
    return this._selectedUser;
  }
@Input()
canEdit: boolean;
@Input('selectedUser')
reset(){
  this.crateForm()

}
set selectedUser(value:User)
{
  this._selectedUser=value;
this.reset;
}
  // onSend({ value, valid }) {
  //   if (valid) {
  //     console.log(value);
  //   } else {
  //     console.log('not valid');
  //   }
  // }
  constructor(private userService:UserService, private fb: FormBuilder,public messageService: MessageService) {
  
  this.messageService.add({
    severity: "success",
    summary: "Service Message",
    detail: "Via MessageService"
  });
}
  save(): void {
    console.log(this.form.value, 'sss');
    this.userService.updateUser(this.form.value)
      .subscribe(
        output => {
          return output;
        }
      );
  }
  
  crateForm() {
    this.form = this.fb.group({
      user_first_name: [this.selectedUser.user_first_name, Validators.compose([Validators.required])],
      user_last_name: [this.selectedUser.user_last_name],
      user_phone_number:[this.selectedUser.user_phone_number,Validators.pattern('0-9')],
      user_email: [this.selectedUser.user_email, Validators.compose([Validators.email, Validators.required])],
      user_password: [this.selectedUser.user_password, Validators.compose([Validators.required])]
    })
  }

  add() {
    console.log(this.form.value, 'sss');
    this.userService.addUser(this.form.value).subscribe(
      output => {
        return output;
      }
    );
      //  .subscribe(hero => {
      //   this.userService.push(this.User.firstName);
      // });
     
  }
}
