import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/UserService';
// import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../service/authentication.server';
import { AlertService } from '../../service/alert.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ConfirmedValidator } from './confirmed.validator';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [UserService]
})
export class NewUserComponent implements OnInit {
  // [x: string]: any;
  user: User;
  newUserForn:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService //private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() { 
    this.newUserForn = new FormGroup({
      user_first_name: new FormControl('', Validators.required),
      user_last_name: new FormControl('', Validators.required),
      user_phone_number: new FormControl('', [
        Validators.required,
        Validators.pattern("")]),
      user_email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      user_password: new FormControl('', Validators.minLength(6)),
      user_confirmPassword: new FormControl('', Validators.required),
      // validator: ConfirmedValidator('user_password', 'user_confirmPassword')

    },);
  }
  get f() {
    return this.newUserForn.controls;
  }
  get user_first_name() {
    return this.newUserForn.get('user_email')
  }
  get user_last_name() {
    return this.newUserForn.get('user_email')
  }
  get user_phone_number() {
    return this.newUserForn.get('user_email')
  }
  get user_email() {
    return this.newUserForn.get('user_email')
  }

  get user_password() {
    return this.newUserForn.get('user_password')
  }
  get user_confirmPassword() {
    return this.newUserForn.get('user_password')
  }
  onSubmit() {  
    this.router.navigateByUrl('/login');
} 
  // save(): void {
  //   this.userService.updateUser(this.user)
  //     .subscribe(() => this.goBack());
  // }
  // add(user_first_name: string,user_last_name:string,user_email:string,user_password:string,user_phone_number:string): void {
  //   user_first_name = this.user.user_first_name.trim();
  //   user_last_name =this.user.user_last_name.trim();
  //   user_email =this.user.user_email.trim();
  //   user_password =this.user.user_password.trim();
  //   user_phone_number =this.user.user_phone_number.trim();


  //   if (!user_first_name) { return; }
  //   this.userService.addUser({user_first_name} as User).toPromise().then(data=> this.user.user_first_name);
  //     //  .subscribe(hero => {
  //     //   this.userService.push(this.User.firstName);
  //     // });


  // }
  // onSend({ value, valid }) {
  //   if (valid) {
  //     console.log(value);
  //   } else {
  //     console.log('not valid');
  //   }
  // }
}
