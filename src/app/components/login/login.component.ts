import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { AuthenticationService } from '../../service/authentication.server';
import { AlertService } from '../../service/alert.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  user: User;

  loginForm = new FormGroup({
    user_email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    user_password: new FormControl('')
  });

  loading = false;
  submitted = false;
  returnUrl: string;
  alertService: any;

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
    // this.loginForm = this.formBuilder.group({
    //   user_email: ['', Validators.required],
    //   user_password: ['', Validators.required],
    // });

    //  get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  get user_email() {
    return this.loginForm.get('user_email')
  }

  get user_password() {
    return this.loginForm.get('user_password')
  }
  onSubmit() {  
    this.router.navigateByUrl('/new-event');
} 
  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   this.loading = true;
  //   this.authenticationService
  //     .login(this.f.user_email.value, this.f.user_password.value)
  //     .pipe(first())
  //     .subscribe(
  //       (data) => {
  //         this.router.navigate([this.returnUrl]);
  //       },
  //       (error) => {
  //         this.alertService.error(error);
  //         this.loading = false;
  //       }
  //     );
  // }
}
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   constructor() {}
//   ngOnInit(): void {}
//   onSubmit() {}
// }
