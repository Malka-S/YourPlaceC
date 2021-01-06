// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';
// import {  UserService } from '../../service/user.service';
// import { AlertService } from '../../service/alert.service';


// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })

// @Component({ templateUrl: 'register.component.html' })
// export class RegisterComponent implements OnInit {
//     registerForm: FormGroup;
//     loading = false;
//     submitted = false;
//     returnUrl: string;

//     constructor(
//         private formBuilder: FormBuilder,
//         private router: Router,
//         private userService: UserService,
//         private alertService: AlertService
//     ) {
      
//     }

//     ngOnInit() {
//         this.registerForm = this.formBuilder.group({
//             firstName: ['', Validators.required],
//             lastName: ['', Validators.required],
//             username: ['', Validators.required],
//             password: ['', [Validators.required, Validators.minLength(6)]]
//         });
//     }

//     // convenience getter for easy access to form fields
//     get f() { return this.registerForm.controls; }
//     get user_email() {
//         return this.registerForm.get('user_email')
//       }
//       get user_password() {
//         return this.registerForm.get('user_password')
//       }
//       get user_name() {
//         return this.registerForm.get('user_name')
//       }
//     onSubmit() {
//         this.submitted = true;

//         // reset alerts on submit
//         this.alertService.clear();

//         // stop here if form is invalid
//         if (this.registerForm.invalid) {
//             return;
//         }

//         this.loading = true;
//         this.userService.register(this.registerForm.value)
//             .pipe(first())
//             .subscribe(
//                 data => {
//                     this.alertService.success('Registration successful', true);
//                     this.router.navigate(['/login']);
//                 },
//                 error => {
//                     this.alertService.error(error);
//                     this.loading = false;
//                 });
//     }
// }