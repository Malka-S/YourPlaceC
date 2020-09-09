import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient,
    private UserService: UserService) { 
this.addUser(UserService);
  }
  private UsersUrl = 'https://localhost:44390/api/Users';
  getUser(): Observable<any[]> {
    return this.http.get<any[]>(this.UsersUrl)
    // .pipe(
    //     catchError(this.handleError <Any[]>('getUser', []))
    //   );
  }
  addUser(User: any): Observable<any> {
    return this.http.post<any>('https://localhost:44390/api/Users/PostUser', User, this.httpOptions);

  }
  updateUser(user: User): Observable<any> {
    return this.http.put(this.UsersUrl+'/PostUser', user, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.user_id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
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