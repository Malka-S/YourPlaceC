import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../model/event.model';
import { BaseCode } from '../model/baseCode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AppService } from './AppService';
@Injectable({
  providedIn: 'root',
})
export class EventService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 
  constructor(private http: HttpClient,public appService:AppService) {
    // this.getEventType();
    // this.addEvent(appService);
  }

 
  getEventType()
  {
     return this.appService.get('Event/GetEventType');

  }
  getEvent(params){
    return this.appService.getbyId('Event',params);
  }
  addEvent(event): Observable<any> 
  {
    return this.appService.post({ path: 'Evnt/PutEvent', body: event });
  } 
  updateEvent(event)
  {
    return this.appService.put('Evnt/PostEvent',event);
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

 
  
}
