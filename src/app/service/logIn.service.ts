import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  User:User[]=[];
  constructor(private http: HttpClient) {}

getUser(): Promise<User[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res(this.User);
    }, 1);
  });
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
