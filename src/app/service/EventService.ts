import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../model/event.model';
import { BaseCode } from '../model/baseCode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EventService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  // Event: Event[] = [
  //   new Event(
  //     3546,
  //     'wedding',
  //     'Rivky and Hallel',
  //     1 / 2 / 2000,
  //     1 / 2 / 2000,
  //     5,
  //     6,
  //     7,
  //     'cgfng'
  //   ),
  //   new Event(
  //     3546,
  //     'wedding',
  //     'Rivky and Hallel',
  //     1 / 2 / 2000,
  //     1 / 2 / 2000,
  //     5,
  //     6,
  //     7,
  //     'cgfng'
  //   ),
  //   new Event(
  //     3546,
  //     'wedding',
  //     'Rivky and Hallel',
  //     1 / 2 / 2000,
  //     1 / 2 / 2000,
  //     5,
  //     6,
  //     7,
  //     'cgfng'
  //   ),
  // ];
  constructor(private http: HttpClient,private EventService:EventService) {
    this.getEventType();
    this.addEvent(EventService);
  }
  private UsersUrl = 'https://localhost:44390/api/Event';
  getEvent(): Observable<any[]> {
    return this.http.get<any[]>(this.UsersUrl)
    // .pipe(
    //     catchError(this.handleError <Any[]>('getUser', []))
    //   );
  }
  addEvent(User: any): Observable<any> {
    return this.http.post<any>('https://localhost:44390/api/Evnt/PostEvent', User, this.httpOptions);

  }
  updateEvent(event: Event): Observable<any> {
    return this.http.put(this.UsersUrl+'/PostEvent', event, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${event.EventCode}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  log(arg0: string): void {
    throw new Error("Method not implemented.");
  }
  handleError<T>(arg0: string): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any> {
    throw new Error("Method not implemented.");
  }
  // GetEventFromServer(): Observable<any[]> {
  //   return this.http.get<any[]>('https://localhost:44390/api/Event/Get');
  // }

  // getEvents(): Promise<Event[]> {
  //   return new Promise((res) => {
  //     setTimeout(() => {
  //       res(this.Event);
  //     }, 1);
  //   });
  // }

  getEventType(): Observable<BaseCode[]> {
    let url = 'https://localhost:44390/api/Event/GetEventType';
    return this.http.get<BaseCode[]>(url);
  }
 
  
}
