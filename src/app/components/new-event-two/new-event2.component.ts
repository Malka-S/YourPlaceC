import { Component, OnInit } from '@angular/core';
import { Table } from '../../model/tables.model';
import { AuthenticationService } from '../../service/authentication.server';
import { AlertService } from '../../service/alert.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-event2',
  templateUrl: './new-event2.component.html',
  styleUrls: ['./new-event2.component.css'],
})
export class NewEvent2Component implements OnInit {
  Table: Table;
  newTables: FormGroup;


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
    this.newTables = new FormGroup({
      TableTitle: new FormControl('', Validators.required)
    });
  }
  get f() {
    return this.newTables.controls;
  }
  get TableTitle() {
    return this.newTables.get('user_email')
  }
  get AmountOfPlaces() {
    return this.newTables.get('user_email')
  }




}
