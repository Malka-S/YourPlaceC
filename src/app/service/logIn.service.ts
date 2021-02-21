import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LogInService {
  User:User[]=[];
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44390/api/User/';

  AddUser(user: User): Observable<any> {

    return this.http.put<any>(this.baseUrl+'PutUser', user);
  }
 
  Login(useremail:string,password:string): Observable<any[]>{
  return this.http.get<any>(this.baseUrl+'Login?useremail='+ useremail + '&password=' +password); 
}
  register(user: User) {
    return this.http.post(`register`, user);
  }
  put(user: User){
    return this.http.put(`/users`, user);
  }
  sendEmailToUser(useremail:string): Observable<any[]>{
    return this.http.get<any>('https://localhost:44390/api/Email/SendEmail?to='+ useremail+'?body=welcome to our site'); 
  }
  // GetUserFromServer(): Observable<any[]> {
  //   return this.http.get<any[]>('https://localhost:44390/api/User/GetUser');
  // }
  //יותר טוב
  GetUserFromServer() {
    return this.http.get<any[]>(this.baseUrl+'GetUser').toPromise().then(result=>{return result;}).catch(err=>{return false;});
  }
}
