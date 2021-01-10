import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LogInService {
  User:User[]=[];
  constructor(private http: HttpClient) {}
  baseUrl = 'https://localhost:44390/api/Users/';

  AddUser(user: User): Observable<any> {
    return this.http.post<User>(this.baseUrl+'PutUser/', user);
  }
//2 parametors of string
Login(parameters:string): Observable<any[]>{
  return this.http.post<any>(this.baseUrl+'Loging/', parameters);
}
  register(user: User) {
    return this.http.post(`/users/register`, user);
  }
  put(user: User){
    return this.http.put(`/users`, user);
  }
  GetUserFromServer(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:44390/api/User/GetUser');
  }

}
