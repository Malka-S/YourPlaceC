import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user.model';
import { AppService } from './AppService';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
  };


  
  constructor(private http: HttpClient, public appService: AppService) { 
     this.addUser(appService);
  }
  getUser() {
    return this.appService.get('Users');
    
  }

  addUser(user) : Observable<any> {
    return this.appService.post({ path: 'Users/PostUser', body: user });
  }
  
  updateUser(user)
  {
    return this.appService.put('User/PostUser',user);
  }
  log(arg0: string): void {
    throw new Error("Method not implemented.");
  }
  handleError<T>(arg0: string): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any> {
    throw new Error("Method not implemented.");
  }

  
    
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
}