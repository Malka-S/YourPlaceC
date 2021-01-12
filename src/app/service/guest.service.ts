import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guest } from '../model/guest.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class GuestService {

  constructor(private http: HttpClient) {}
  baseUrl: string = 'http://localhost:4200/Guest/';

  getGuest() : Observable<Guest> {
    return this.http.get<Guest>(this.baseUrl+'GetGuestList/');
  }
  
  getGuestById(id: number): Observable<Guest> {
    return this.http.get<Guest>(this.baseUrl +'GetGuestsByCategory/'+ id);
  }

   AddGuest(guest: Guest): Observable<any> {
    return this.http.post<Guest>(this.baseUrl+'PutGuest/', guest);
  }
AddRequest(){}
  updateGuest(guest: Guest): Observable<Guest> {
    return this.http.put<Guest>(this.baseUrl + 'PostGuest/', guest);
  }
  getAllGuests(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'SelectGuests');
  }
     //  מהשרת אמור לקבל את האורח ולמחוק אותו
  deleteGuest(id: number): Observable<Guest> {
    return this.http.delete<Guest>(this.baseUrl +'deleteGuest/'+ id);
  }
  getGuestByType(parameter:string): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.baseUrl+'SelectGuestsByCatagory/'+parameter);
  }
  
  }
