import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guest } from '../model/guest.model';
import { Observable } from 'rxjs';
// import {ApiResponse} from "../model/api.response";


@Injectable({ providedIn: 'root' })
export class GuestService {

  constructor(private http: HttpClient) {}
  baseUrl: string = 'http://localhost:4200/guest/';
//   getGuest() : Observable<ApiResponse> {
//     return this.http.get<ApiResponse>(this.baseUrl);
//   }
  
//   getGuestById(id: number): Observable<ApiResponse> {
//     return this.http.get<ApiResponse>(this.baseUrl + id);
//   }

  //  createGuest(guest: Guest): Observable<any> {
  //   return this.http.post<Guest>(this.baseUrl, guest);
  // }
 
  // updateGuest(guest: Guest): Observable<> {
  //   return this.http.put<ApiResponse>(this.baseUrl + guest.guest_id, guest);
  // }

  deleteGuest(id: number): Observable<Guest> {
    return this.http.delete<Guest>(this.baseUrl + id);
  }
  
  }
