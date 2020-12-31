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
  Event: Event[] = [];
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
  constructor(private http: HttpClient) {
    this.getEventType();
  }
  GetEventFromServer(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:44390/api/Event/Get');
  }

  getEvents(): Promise<Event[]> {
    return new Promise((res) => {
      setTimeout(() => {
        res(this.Event);
      }, 1);
    });
  }

  getEventType(): Observable<BaseCode[]> {
    let url = 'https://localhost:44390/api/Event/GetEventType';
    return this.http.get<BaseCode[]>(url);
  }

  updateEventType(parameter: number): Observable<boolean> {
    let url = 'https://localhost:44390/api/Users/UpdateEventType';
    return this.http.post<boolean>(url, parameter);
  }
}
