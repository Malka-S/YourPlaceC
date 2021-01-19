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
  baseApiUrl = "https://localhost:44390/api/Event"

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
  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.baseApiUrl+'postEvent', event);
  }
  // Returns an observable 
  upload(file):Observable<any> { 
  
    // Create form data 
    const formData = new FormData();  
      
    // Store form name as "file" with file data 
    formData.append("file", file, file.name); 
      
    // Make http post request over api 
    // with formData as req 
   return this.http.post(this.baseApiUrl, formData) 
 
} 
}
